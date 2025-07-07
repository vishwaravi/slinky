import bcrypt from 'bcrypt';

// 🔹 Generate a bcrypt hash with a custom salt
async function generateHashWithCustomSalt(password, customSalt) {
  const hash = await bcrypt.hash(password, customSalt);
  return hash;
}

// 🔹 Compare a plain password with a bcrypt hash
async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

// 🧪 Demo
const runDemo = async () => {
  const password = "Vishwa";

  // Step 1: Generate custom salt (cost factor 10)
  const salt = '$2b$10$Oy3d/yfjyrSKZBhUY/q60e'
  console.log("Generated Salt:", salt);

  // Step 2: Generate hash using that salt
  const hash1 = await generateHashWithCustomSalt(password, salt);
  const hash2 = await generateHashWithCustomSalt(password, salt);
  console.log(hash1+"\n"+hash2);


  // Step 3: Compare with correct password
  const isCorrect = await comparePassword("Vishwa", hash1);
  console.log("✅ Correct password match?", isCorrect); // true

  // Step 4: Compare with wrong password
  const isWrong = await comparePassword("wrongPass", hash1);
  console.log("❌ Wrong password match?", isWrong); // false
};

runDemo();
