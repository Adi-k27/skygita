
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

services = [
    "Data & AI", "Custom Applications", "Legacy Apps", "Cloud Services",
    "Business Analysis", "Software Architecture", "Mobile Apps", "Front-End Development"
]

@app.route('/')
def index():
    return render_template('index.html', services=services)

@app.route('/submit', methods=['POST'])
def submit():
    form_data = request.form.to_dict()
    print("Form Submission:", form_data)
    return redirect(url_for('index'))

# Dynamic route for services
@app.route('/<service_name>')
def service_page(service_name):
    return f"<h1>Welcome to {service_name.replace('_', ' ').title()} Service Page</h1>"

if __name__ == "__main__":
    app.run(debug=True)
