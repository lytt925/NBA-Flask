# NBA-Flask

flask包含前端code, 還有pycaret跟tpot的pretrained模型api  
flask_autosk 包含 autosklearn的pretrained模型api  

如果解壓縮有遇到什麼identifier的問題都直接略過就行。

## Usage 1
1. `cd NBA-Flask`
2. 確保 flask/frontend裡面有build，如果沒有請先cd到frontend然後npm install，再npm run build
3. `docker compose up`

## Usage 2
分別進入flask和flask_autosk 輸入python server.py 然後開啟localhost:5001。（因為前端code放在5001）
