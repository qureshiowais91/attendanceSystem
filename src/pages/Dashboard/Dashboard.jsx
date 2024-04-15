// import { Container, Grid } from '@mui/material';
// import { BasicInfo } from '../../components/UI/Dashboard/BasicInfo';
// import { ContactInfo } from '../../components/UI/Dashboard/ContactInfo';
// // import { Curriculum } from '../../components/UI/Dashboard/Curriculum';
// import { Facilities } from '../../components/UI/Dashboard/Facilities';
// import { MissionVision } from '../../components/UI/Dashboard/MissionVision';

// function Dashboard() {
//   return (
//     <div>
//       <Container maxWidth='lg'>
//         <Grid>
//           <MissionVision></MissionVision>
//           <Facilities></Facilities>
//           <BasicInfo></BasicInfo>
//           <ContactInfo></ContactInfo>
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default Dashboard;
import { useEffect, useRef } from 'react';
import { Container, Grid, Typography } from '@mui/material';

function Dashboard() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set initial position of the snake
    let snake = [{ x: 10, y: 10 }];
    // Set initial position of the food
    let food = { x: 5, y: 5 };
    // Set initial direction of the snake
    let dx = 0;
    let dy = 0;

    function drawSnake() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'green';
      snake.forEach((segment) => {
        ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
      });
      ctx.fillStyle = 'red';
      ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
    }

    function moveSnake() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        generateFood();
      } else {
        snake.pop();
      }
    }

    function generateFood() {
      food.x = Math.floor(Math.random() * 20);
      food.y = Math.floor(Math.random() * 20);
    }

    function handleKeyDown(event) {
      switch (event.key) {
        case 'ArrowUp':
          dx = 0;
          dy = -1;
          break;
        case 'ArrowDown':
          dx = 0;
          dy = 1;
          break;
        case 'ArrowLeft':
          dx = -1;
          dy = 0;
          break;
        case 'ArrowRight':
          dx = 1;
          dy = 0;
          break;
        default:
          break;
      }
    }

    function gameLoop() {
      moveSnake();
      drawSnake();
      setTimeout(gameLoop, 100);
    }

    document.addEventListener('keydown', handleKeyDown);
    gameLoop();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h4' gutterBottom>
              We are under development
            </Typography>
            <Typography variant='h5' gutterBottom>
              Coming Soon
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <h1>Play With Arrow</h1>

            <canvas ref={canvasRef} width='400' height='400'></canvas>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
