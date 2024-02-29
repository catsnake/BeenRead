// Assuming you have a database connection and a User model
const User = require('./models/userModel');

async function resetFollowers() {
  try {
    // Find all users in the database
    const users = await User.find();

    // Update followers and followedUsers properties for each user
    for (const user of users) {
      user.followers = [];
      user.followedUsers = [];
      await User.findByIdAndUpdate(user._id, user);
    }

    console.log('Followers and followedUsers properties reset successfully.');
  } catch (error) {
    console.error(
      'Error resetting followers and followedUsers properties:',
      error
    );
  }
}

module.exports = resetFollowers;
