# **Introduction**

This app is an OAuth based survey email app for a user to set up a survey using an email provider and then see results of the survey in analytics.

#### **Note:**

I stopped building this application when, using mLab.com for the Mongo DB, mLab didn't show my added User or added Category for no apparent reason.

### Third Party Applications:

* Passport

* Google+ API OAuth 20

* Stripe

* mLab.com

* React

* Mongoose

* Sendgrid emails

### **General-**

The application sits on top of Google+ to allow users to create an account by signing in with their Google profile. The user is tracked using (res, req) route handlers that I hardcoded into the app as part of Passport. That is the general theme of this application, we harcode all the paths for the data transfer among the different uses of Mongo in a myraid of restful endpoints, but then Passport also adds a state to the application for authorization. Since Mongo only has up to 4 mB of storage per database, I would have engineered around the limitations on the email databases for the analytics and survey size limits with route handler code, but I stopped building when mLab didn't respond to me.

### **Example-**

Stripe reaction to buying credits to use for surveys from an authorized user:

```javascript

export const handleToken = (token) => asynch dispatch => {
	const res = await axios.post('/api/stripe', token);

	dispatch({ type: FETCH_USER, payload: res.data});
};
```