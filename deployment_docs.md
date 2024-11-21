# Deploy NODE projects

Встановити на сервері Ubuntu:
- nodejs
- git
- npm or yarn

Варіанти деплою node-проєкту на сервері:
- cli (тимчасово поки відкрита cli)
- nohup
- pm2 (daemon process manager)
- systemd (системна служба)

Встановлення як системна служба (systemd):
1. cd <to folder>
2. git clone <http://github.com/project.git>
3. запустити білд проєкту:
  - cd <project folder>
  - npm install -y
  - npm run build
4. Додати службу проєкта (systemd or pm2) і поставити в автозагрузку:
  -


Перегляд логів:
- pm2 logs <app_name_or_id>
- pm2 logs --lines 100 <app_name_or_id> - в реальному часі
- journalctl -u <service_name> -r
- journalctl -u <service_name> -f - в реальному часі

Можливі проблеми: 
1. Немає доступу до land.simpatik.group на сервері: 
  - 