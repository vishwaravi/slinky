import {rateLimit} from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 1000,
  limit:10,
  standardHeaders:true,
  message: { error: 'Too many requests, please try again later.' },
  statusCode:429
})

export default limiter;