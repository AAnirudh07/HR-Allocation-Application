from flask import Flask, Request, request
# from flask.wrappers import Request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


Request
@app.route("/getTest")
def getData():
    data ={"id":2,"name":"Anna"}
    return data

@app.route("/postTest", methods=["POST"])
def postData():
	data = request.json
	print(data)
	return data

if __name__ == "__main__":
	app.run()
