from flask import Flask, render_template, request, redirect, url_for
# jsonを扱う
import json
#Pandas numpyをインポート
import pandas as pd
import numpy as np

app = Flask(__name__)

from tinydb import TinyDB, Query
db = TinyDB('review.json')

@app.route("/")
@app.route("/register")
def register():
    return render_template('account_register.html')

@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/home/user")
def home_user():
    return home()

@app.route("/home/search")
def search():
    return render_template('search.html')

@app.route("/home/point")
def point():
    return render_template('point.html')

@app.route("/home/search/engineering")
def engineering():
    return render_template('engineering.html')

@app.route("/home/search/engineering/system_c")
def system_c():
    return render_template('system_c.html')


@app.route("/account")
def account():
    return render_template('account.html')

@app.route("/account_1")
def account_1():
    return render_template('account_1.html')

@app.route("/more")
def more():
    return render_template('more.html')

@app.route("/information")
def information():
    #jsonデータを読み込む
    data=json.load(open('review.json'))
    #  Pandas の dataFrameに変換
    df=pd.DataFrame.from_records(data['_default'])
    # Tによって転置する必要がある
    df=df.T

    total_average=np.mean(df['total_point'].values)
    total_average=round(total_average,1)

    attendance_average=np.mean(df['attendance_point'].values)
    attendance_average=round(attendance_average,1)

    credit_average=np.mean(df['credit_point'].values)
    credit_average=round(credit_average,1)

    score_average=np.mean(df['score_point'].values)
    score_average=round(score_average,1)

    return render_template('information.html', total_average=total_average,atattendance_average=attendance_average,credit_average=credit_average,score_average=score_average,reviews=db.all())


@app.route("/review")
def review():
    return render_template('review.html')

@app.route("/review/add")
def add():
    db.insert({
        'user': request.args.get('user'),
        'total_point':request.args.get('total_point',type=int),
        'attendance_point':request.args.get('attendance_point',type=int),
        'credit_point':request.args.get('credit_point',type=int),
        'score_point':request.args.get('score_point',type=int),
        'review_comment':request.args.get('review_comment')
    })


    return information()




@app.route("/reset")
def reset():
    if db is not None:
        db.purge()
    db.insert({'user': 'A','total_point':3,"attendance_point":4,"credit_point":5,"score_point":4, "review_comment":"可愛い過ぎる"})
    return information()

if __name__ == "__main__":
    app.run(debug = True)
