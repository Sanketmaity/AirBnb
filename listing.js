const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://www.bing.com/images/search?view=detailV2&ccid=IfMfXMsz&id=CF492B76358C5938727A81E47759BAD36776F6FB&thid=OIP.IfMfXMszDW3IKwpUURoq6wHaE5&mediaurl=https%3A%2F%2Fbalisanur.intercontinental.com%2Fwp-content%2Fuploads%2F2022%2F10%2F3BR-Villa-1.jpg&exph=951&expw=1440&q=villas+images&simid=607992182648874407&form=IRPRST&ck=B05A6429C251F04EF8D0CE1735AD256C&selectedindex=8&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11&pivotparams=insightsToken%3Dccid_Jyv6bdcQ*cp_1FCE1445C6421772D8F9C3783CB71897*mid_6CF045B837DFD4E397FF8A22B032306B531880C1*simid_608000111168813816*thid_OIP.Jyv6bdcQkP6n4UDdckCPgwHaFV&iss=VSI",
        set: (v) => 
            v === "" ? "https://www.bing.com/images/search?view=detailV2&ccid=IfMfXMsz&id=CF492B76358C5938727A81E47759BAD36776F6FB&thid=OIP.IfMfXMszDW3IKwpUURoq6wHaE5&mediaurl=https%3A%2F%2Fbalisanur.intercontinental.com%2Fwp-content%2Fuploads%2F2022%2F10%2F3BR-Villa-1.jpg&exph=951&expw=1440&q=villas+images&simid=607992182648874407&form=IRPRST&ck=B05A6429C251F04EF8D0CE1735AD256C&selectedindex=8&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11&pivotparams=insightsToken%3Dccid_Jyv6bdcQ*cp_1FCE1445C6421772D8F9C3783CB71897*mid_6CF045B837DFD4E397FF8A22B032306B531880C1*simid_608000111168813816*thid_OIP.Jyv6bdcQkP6n4UDdckCPgwHaFV&iss=VSI"
            : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;