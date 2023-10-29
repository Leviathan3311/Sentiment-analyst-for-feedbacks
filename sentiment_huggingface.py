import pandas as pd
import numpy as np
#import jieba
import multiprocessing
import keras
import os
import torch
from torch import nn
from torch.utils.data import DataLoader, Dataset
from transformers import BertTokenizer, BertModel, AdamW, get_linear_schedule_with_warmup
from flask import Flask, render_template, request
class BERTClassifier(nn.Module):
    def __init__(self, bert_model_name, num_classes):
        super(BERTClassifier, self).__init__()
        self.bert = BertModel.from_pretrained(bert_model_name)
        self.dropout = nn.Dropout(0.1)
        self.fc = nn.Linear(self.bert.config.hidden_size, num_classes)

    def forward(self, input_ids, attention_mask):
        outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        pooled_output = outputs.pooler_output
        x = self.dropout(pooled_output)
        logits = self.fc(x)
        return logits
bert_model_name = 'bert-base-uncased'

num_classes = 2
max_length = 128
batch_size = 16
num_epochs = 4
learning_rate = 2e-5
# def evaluate_predictlist(model, data_loader, device):
#     model.eval()
#     predictions = []
#     actual_labels = []
#     with torch.no_grad():
#         for batch in data_loader:
#             input_ids = batch['input_ids'].to(device)
#             attention_mask = batch['attention_mask'].to(device)
#             labels = batch['label'].to(device)
#             outputs = model(input_ids=input_ids, attention_mask=attention_mask)
#             _, preds = torch.max(outputs, dim=1)
#             predictions.extend(preds.cpu().tolist())
#             actual_labels.extend(labels.cpu().tolist())
#     return predictions
def predict_sentiment(text, model, tokenizer, device, max_length=128):
    model.eval()
    encoding = tokenizer(text, return_tensors='pt', max_length=max_length, padding='max_length', truncation=True)
    input_ids = encoding['input_ids'].to(device)
    attention_mask = encoding['attention_mask'].to(device)

    with torch.no_grad():
        outputs = model(input_ids=input_ids, attention_mask=attention_mask)
        _, preds = torch.max(outputs, dim=1)

    sentiment = "positive" if preds.item() == 1 else "negative"

    return sentiment


device = torch.device("cpu")
model = BERTClassifier(bert_model_name, num_classes)
model.load_state_dict(torch.load(r'C:\Users\Admin\OneDrive\Máy tính\cho dang\bert_classifier.pth', map_location=device))
model.eval()
tokenizer = BertTokenizer.from_pretrained(bert_model_name)


app = Flask(__name__)
app.static_url_path = '/static' 

@app.route('/',methods=['GET','POST'])
def index_view():
    res = {
        'test_text':'',
        'sentiment':''
    }
    if request.method == 'POST':
        test_text = request.form['conmeo']  # Lấy đầu vào văn bản từ form
        res['sentiment'] = predict_sentiment(test_text, model, tokenizer, device)
        res['test_text']=test_text
        if res['sentiment'] == 'positive':
            return render_template('positive.html', res=res)
        else:
            return render_template('negative.html', res=res)
    return render_template('index.html', res=res)
if __name__ == '__main__':
    app.run(debug=True,use_reloader=False, port=8000)
#device = torch.device("cpu")
# test_text="I visit Fox Meadows probably weekly, not for lunch + ice cream only, but their market items, too. From the day they opened their lovely doors, they have gotten it spot on.. all aspects of this establishment has been thought out, from the menu (everything is fantastic), the ice cream (permanent spot in my freezer), and the building itself is like welcoming you into their own home.. It may be crazy busy, parking spots maxed out, but there is a reason for it, they are awesome + the staff is the sweetest!! Thanks"
# sentiment = predict_sentiment(test_text, model, tokenizer, device)
# print(f"Predicted sentiment: {sentiment}")