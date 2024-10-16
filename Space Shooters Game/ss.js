window.onload = function(){
    var startScreen = document.getElementById('startScreen');
    var startButton = document.getElementById('startButton');
    var gameArea = document.getElementById('gameArea');
    var canvas = document.querySelector("canvas");
    var c = canvas.getContext("2d");
    var healthDisplay = document.getElementById('health');
    var scoreDisplay = document.getElementById('score');
    var endGameMessage = document.getElementById('endGameMessage');
    var finalScore = document.getElementById('finalScore');
    var okButton = document.getElementById('okButton');

    var score, health, _bullets, _enemies, _healthkits, animationId;
    var enemyInterval, healthkitInterval, fireInterval;

    function resetGame() {
        endGameMessage.classList.add('hidden');
        startScreen.style.display = 'block';
        gameArea.style.display = 'none';
        score = 0;
        health = 100;
        _bullets = [];
        _enemies = [];
        _healthkits = [];
        healthDisplay.textContent = 'Health: 100';
        scoreDisplay.textContent = 'Score: 0';
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        clearInterval(enemyInterval);
        clearInterval(healthkitInterval);
        clearInterval(fireInterval);
    }

    startButton.addEventListener('click', function() {
        startScreen.style.display = 'none';
        gameArea.style.display = 'block';
        startGame();
    });

    okButton.addEventListener('click', resetGame);

    function endGame() {
        cancelAnimationFrame(animationId);
        clearInterval(enemyInterval);
        clearInterval(healthkitInterval);
        clearInterval(fireInterval);
        finalScore.textContent = `Your final score: ${score}`;
        endGameMessage.classList.remove('hidden');
    }

    function startGame(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var mouse = {
            x: innerWidth/2,
            y: innerHeight-33
        };
        
        canvas.addEventListener("mousemove", function(event){
            mouse.x = event.clientX;
        });

        var player_width = 32;
        var player_height = 32;
        var playerImg = new Image();
        score = 0;
        health = 100;
        playerImg.src = "https://image.ibb.co/dfbD1U/heroShip.png";
        
        _bullets = []; 
        var bullet_width = 6;
        var bullet_height = 8;
        var bullet_speed = 10;
    
        _enemies = []; 
        var enemyImg = new Image();
        enemyImg.src = "https://i.ibb.co/0YgHvmx/enemy-fotor-20230927153748.png"
        var enemy_width = 82;
        var enemy_height = 82;
    
        _healthkits = []; 
        var healthkitImg = new Image();
        healthkitImg.src = "https://image.ibb.co/gFvSEU/first_aid_kit.png";
        var healthkit_width = 32;
        var healthkit_height = 32;
        
        function Player(x, y, width, height){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            
            this.draw = function(){
                c.drawImage(playerImg, mouse.x-player_width/2, canvas.height-player_height-10);
            };
            
            this.update = function(){
                this.draw();
            };
        }
        
        function Bullet(x, y, width, height, speed){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.speed = speed;
            
            this.draw = function(){
                c.fillStyle = "white";
                c.fillRect(this.x, this.y, this.width, this.height);
            };
            
            this.update = function(){
                this.y -= this.speed;
                this.draw();
            };
        }
        
        function Enemy(x, y, width, height, speed){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.speed = speed;
            
            this.draw = function(){
                c.drawImage(enemyImg, this.x, this.y);
            };
            
            this.update = function(){
                this.y += this.speed;
                this.draw();
            };
        }
        
        function Healthkit(x, y, width, height, speed){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.speed = speed;
            
            this.draw = function(){
                c.drawImage(healthkitImg, this.x, this.y);
            };
            
            this.update = function(){
                this.y += this.speed;
                this.draw();
            };
        }
          
        var __player = new Player(mouse.x, canvas.height-player_height-10, player_width, player_height);
        
        function drawEnemies(){
            for (var _ = 0; _<4; _++){ 
                var x = Math.random()*(canvas.width-enemy_width);
                var y = -enemy_height; 
                var speed = Math.random()*2 + 1;
                var __enemy = new Enemy(x, y, enemy_width, enemy_height, speed);
                _enemies.push(__enemy);
            }
        }
        enemyInterval = setInterval(drawEnemies, 1234);
          
        function drawHealthkits(){
            for (var _ = 0; _<1; _++){   
                var x = Math.random()*(canvas.width-healthkit_width);
                var y = -healthkit_height; 
                var speed = Math.random()*2.6 + 1;
                var __healthkit = new Healthkit(x, y, healthkit_width, healthkit_height, speed);
                _healthkits.push(__healthkit); 
            }
        }
        healthkitInterval = setInterval(drawHealthkits, 15000);
    
        function fire(){ 
            for (var _ = 0; _<1; _++){
                var x = mouse.x-bullet_width/2;
                var y = canvas.height-player_height-10;
                var __bullet = new Bullet(x, y, bullet_width, bullet_height, bullet_speed);
                _bullets.push(__bullet);
            }
        }
        fireInterval = setInterval(fire, 200);
          
        function collision(a,b){
            return a.x < b.x + b.width &&
                   a.x + a.width > b.x &&
                   a.y < b.y + b.height &&
                   a.y + a.height > b.y;
        }

        function animate(){
            animationId = requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);
            
            healthDisplay.textContent = `Health: ${health}`;
            scoreDisplay.textContent = `Score: ${score}`;
            
            __player.update();
    
            for (var i=0; i < _bullets.length; i++){
                _bullets[i].update();
                if (_bullets[i].y < 0){
                    _bullets.splice(i, 1);
                }
            }
    
            for (var k=0; k < _enemies.length; k++){
                _enemies[k].update();
                if(_enemies[k].y > canvas.height){
                    _enemies.splice(k, 1);
                    health -= 10;
                    if(health <= 0){
                        endGame();
                        return;
                    }
                }
            }
        
            for(var j = _enemies.length-1; j >= 0; j--){
                for(var l = _bullets.length-1; l >= 0; l--){
                    if(collision(_enemies[j], _bullets[l])){
                        _enemies.splice(j, 1);
                        _bullets.splice(l, 1);
                        score++;
                        break;
                    }
                }
            }
            
            for(var h=0; h < _healthkits.length; h++){
                _healthkits[h].update();
            }
            for(var hh = _healthkits.length-1; hh >= 0; hh--){
                for(var hhh = _bullets.length-1; hhh >= 0; hhh--){
                    if(collision(_healthkits[hh], _bullets[hhh])){
                        _healthkits.splice(hh, 1);
                        _bullets.splice(hhh, 1);
                        health += 10;
                        break;
                    }
                }
            } 
        }
        animate();
    }

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
};