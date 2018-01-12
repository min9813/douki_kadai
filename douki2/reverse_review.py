import os
from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
# jsonを扱う
import json
#Pandas numpyをインポート
import pandas as pd
import numpy as np

UPLOAD_FOLDER = '/tmp/'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

from tinydb import TinyDB, Query
review_db = TinyDB('review.json')
user_db = TinyDB('user.json')
@app.route("/")
@app.route("/register")
def register():
    return render_template('account_register.html')

@app.route("/home")
def home():
    #jsonデータを読み込む
    data=json.load(open('user.json'))
    #  Pandas の dataFrameに変換
    df=pd.DataFrame.from_records(data['_default'])
    # Tによって転置する必要がある
    df=df.T
    # dfの最後の行をとってくる(still DF)
    df=df[-1:]
    # DFをarrayに変換し値を取得
    first_name=df['first_name'].values[0]
    last_name=df['last_name'].values[0]
    mail_address=df['mail_address'].values[0]
    password=df['pass'].values[0]
    grade=df['grade'].values[0]
    major=df['major'].values[0]
    course=df['course'].values[0]
    return render_template('home.html',grade=grade,major=major,course=course,last_name=last_name,first_name=first_name)

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

    return render_template('information.html', total_average=total_average,atattendance_average=attendance_average,credit_average=credit_average,score_average=score_average,reviews=review_db.all())


@app.route("/review")
def review():
    return render_template('review.html')

@app.route("/review/add")
def add():
    review_db.insert({
        'user': request.args.get('user'),
        'total_point':request.args.get('total_point',type=int),
        'attendance_point':request.args.get('attendance_point',type=int),
        'credit_point':request.args.get('credit_point',type=int),
        'score_point':request.args.get('score_point',type=int),
        'review_comment':request.args.get('review_comment')
    })


    return 

@app.route("/account_register")
def account_register():
    user_db.insert({
        'first_name':request.args.get('first_name'),
        'last_name':request.args.get('last_name'),
        'mail_address':request.args.get('email'),
        'pass':request.args.get('password'),
        'grade':request.args.get('grade',type=int),
        'course':request.args.get('course'),
        'major':request.args.get('major')
        })

    return home()





@app.route("/reset")
def reset():
    if review_db is not None:
        review_db.purge()
    review_db.insert({'user': 'A','total_point':3,"attendance_point":4,"credit_point":5,"score_point":4, "review_comment":"可愛い過ぎる"})
    if user_db is not None:
        user_db.purge()
        
    return register()

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit a empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('uploaded_file',
                                    filename=filename))
    return

if __name__ == "__main__":
    app.run(debug = True)
