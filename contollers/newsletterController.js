const client = require('@sendgrid/client');
require('dotenv').config();
client.setApiKey(process.env.SENDGRID_API_KEY);

// @desc   Add contact for newsletter
// @route  public /api/newsletter
// @method post
const addContact = async (req, res) => {
  const { email } = req.body;

  try {
    const request = {
      url: `/v3/marketing/contacts`,
      method: 'PUT',
      body: {
        list_ids: ['3709d643-3dab-44ea-868b-35cedce4e801'],
        contacts: [
          {
            email,
          },
        ],
      },
    };

    await client.request(request);

    // response
    res.status(200).json({ message: 'Newsletter subscription successfull!' });
  } catch (error) {
    console.log(error.response.body);
    res.status(400).json({
      message: 'Error! Sign up for newsletter failed!',
      error: error.message,
    });
  }
};

module.exports = {
  addContact,
};
