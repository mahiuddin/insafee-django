module.exports = {
    apps: [
    {
    name: "insafee",
    script: "/var/www/insafee.com/venv/bin/gunicorn",
    args: "insafee.wsgi:application --workers 3 --bind 0.0.0.0:8004",
    cwd: "/var/www/insafee.com/insafee",
    interpreter: "/var/www/insafee.com/venv/bin/python3.12",
    env: {
        DJANGO_SETTINGS_MODULE: "insafee.settings",
     },
    },
 ],
};