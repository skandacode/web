import flask
from flask import *
app = Flask(__name__)

@app.route('/room/<name>')
def room(name):
    print(' my room name'+name)
    return render_template('roomp5.html')


@app.route('/',methods = ['POST', 'GET'])
def index():
    #print(request.method)
    if request.method == 'POST':
        user = request.form['nm']
        print(user)
        return redirect(url_for('room',name = user))
    else:
        return render_template('index.html')

app.run(host='0.0.0.0', port=5000)