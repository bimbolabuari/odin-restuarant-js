const contactSection = document.createElement('section');
contactSection.classList.add('section');
contactSection.id = 'contact';
contactSection.innerHTML = `
  <div class="">
  <h3 class="contact"> ${'Contact Us'} </h3>
  <h4 class="h4">${'Here You Can Make A Reservation Or Just walkin to our cafe'}</h4>
</div>
<p class="paragraph">${'Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie, namei sollicitudin urna diam, sed commodo purus porta ut.'}
</p>
<div class="phone">
  <i class="fa fa-phone"></i>
  <h4>${'Phone Numbers'}</h4>
  <span
    ><a href="#">${'080-090-0990'}</a><br />
    <a href="#">${'080-090-0880'}</a>
  </span>
</div>
<div class="message">
  <i class="fa fa-envelope"></i>
  <h4>${'Emails'}</h4>
  <span>
    <a href="#">${'hello@company.com'}</a>
    <br /><a href="#">${'info@company.com'}</a>
  </span>
</div>

<form class="form" action="" method="post">
  <h4>${'Table Reservation'}</h4>

  <fieldset>
    <input name="name" type="text" id="name" placeholder="Your Name" required="" />
  </fieldset>

  <fieldset>
    <input
      name="email"
      type="text"
      id="email"
      pattern="[^ @]*@[^ @]*"
      placeholder="Your Email Address"
      required=""
    />
  </fieldset>

  <fieldset>
    <input name="phone" type="text" id="phone" placeholder="Phone Number" required="" />
  </fieldset>

  <fieldset>
    <select value="number-guests" name="number-guests" id="number-guests">
      <option value="number-guests">${'Number Of Guests'}</option>
      <option name="1" id="1">${1}</option>
      <option name="2" id="2">${2}</option>
      <option name="3" id="3">${3}</option>
      <option name="4" id="4">${4}</option>
      <option name="5" id="5">${5}</option>
      <option name="6" id="6">${6}</option>
      <option name="7" id="7">${7}</option>
      <option name="8" id="8">${8}</option>
      <option name="9" id="9">${9}</option>
      <option name="10" id="10">${10}</option>
      <option name="11" id="11">${11}</option>
      <option name="12" id="12">${12}</option>
    </select>
  </fieldset>

  <fieldset>
    <input name="date" id="date" type="text" class="form-control" placeholder="dd/mm/yyyy" />
  </fieldset>

  <fieldset>
    <select value="time" name="time" id="time">
      <option value="time">${'Time'}</option>
      <option name="Breakfast" id="Breakfast">${'Breakfast'}</option>
      <option name="Lunch" id="Lunch">${'Lunch'}</option>
      <option name="Dinner" id="Dinner">${'Dinner'}</option>
    </select>
  </fieldset>

  <fieldset>
    <textarea
      name="message"
      rows="6"
      id="message"
      placeholder="Click here for message..."
      required=""
    ></textarea>
  </fieldset>
  <button type="submit" id="form-submit" class="form-button"> ${'Make A Reservation'} </button>
</form>`;

export default contactSection;
