import {
  ADD_PLACE,
  LANGUAGE,
  ACTIVITYINDICATOR,
  ISLOGGEDIN,
  PERSIONAL_DETAILS,
  SEARCHEDITEM,
  WISHLISTITEMS,
  LOYALTYPOINTS,
  SEARCHVIEWEMPTYRESPONSE,
  GETALLCATEGORIES,
  DECENTCATEGORIES,
  GETFEATUREDPRODUCTS,
  GETALLFEATUREDPRODUCTS,
  SELECTEDPRODUCTS,
  SELECTEDITEMARRAY,
  SEARCHSELECTEDITEMARRAY,
  BOOKASLOTAPI,
  FAVOURITESITEM,
  SPECIFICORDERS,
  ADDRESS,
  GETBRANDS,
  GETDATES,
  SELCTEDDATE,
  ISADDRESSISNULL,
  GETALLREVIEW,
  BOOKASLOTAMOUNT,
  LOYALITYPOINTS,
  VOUCHERPRICE,
  ISFROMHOMEVIEW,
  PRODUCTSCATEGORYBYID,
  RESETPRODUCTSBYID,
  TOKEN,
  BANNERS,
  GETMAINALLGETOGORIES,
  SELECTEDADDRESSITEM,
  RADEEMABLEPOINTS,
  ISCHECKOUTTRUE,
  FINDPOSTALCODE,
  ISADDRESSLOADED,
  SELECTEDTOWN,
  SELECTEDCOUNTRY,
  SELECTEDPOSTALCODE,
  ISADDRESSSELECTED,
  SELECTEDADDRESSLINE1,
  SELECTEDADDRESSLINE2,
  SELECTEDADDRESSLINE3,
  SETHEIGHT,
  ENTEREDPOSTALCODE,
  RESETITEM,
  ADDPROFILE,
  ALLDRIVES,
  ACCEPTSTATUS,
} from '../actions/types';

const initialState = {
  profile: {},
  alldrives: [],
  acceptStatus: false,

  language: 'tamil',
  places: [],
  apiLoading: false,
  loggedInUser: false,
  persionalDetails: {},
  setSearchedItem: [],
  wishListItems: [],
  loyalityPoints: [],
  searchViewResponseIsEmpty: false,
  getCategories: [],
  decentCategories: [],
  getfeaturedProducts: [],
  getAllfeaturedProducts: [],
  getSelectedProducts: [],
  selectedArray: [],
  selectedArrayInSearch: [],
  bookASlotDates: [],
  getfavouritesItems: [],
  getSpecificOrders: [],
  setAddress: [],
  getBrandsItems: [],
  getDates: [],
  getSelectedDate: '',
  isAddressNull: false,
  getAllReviews: [],
  bookASlotmountDetails: {},
  loyalityPointAmount: '0',
  voucherAmount: '',
  isFromHome: false,
  getProductsbyCategoryID: [],
  token: '',
  banners: '',
  allMainCategories: '',
  selectedAddress: '',
  radeemPoints: '0',
  isCheckoutButtonEnable: false,
  setpostalCode: [],
  isAddressLoaded: false,
  selectedTown: '',
  selectedCountry: '',
  selectedpostalCode: '',
  addressSelected: false,
  addressLine1: '',
  addressLine2: '',
  addressLine3: '',
  setHeight: false,
  enteredpostalCode: '',
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCEPTSTATUS:
      return {
        ...returnstate,
        acceptstatus: action.acceptData,
      };

    case ADDPROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case ALLDRIVES:
      return {
        ...state,
        alldrives: action.allDrives,
      };

    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.payload,
        }),
      };
    case LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case ACTIVITYINDICATOR:
      return {
        ...state,
        apiLoading: action.payload,
      };
    case ISLOGGEDIN:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case PERSIONAL_DETAILS:
      return {
        ...state,
        persionalDetails: action.payload,
      };
    case SEARCHEDITEM:
      return {
        ...state,
        setSearchedItem: action.payload,
      };
    case WISHLISTITEMS:
      return {
        ...state,
        wishListItems: action.payload,
      };
    case LOYALTYPOINTS:
      return {
        ...state,
        loyalityPoints: action.payload,
      };
    case SEARCHVIEWEMPTYRESPONSE:
      return {
        ...state,
        searchViewResponseIsEmpty: action.payload,
      };
    case GETALLCATEGORIES:
      return {
        ...state,
        getCategories: action.payload,
      };
    case DECENTCATEGORIES:
      return {
        ...state,
        decentCategories: action.payload,
      };
    case GETFEATUREDPRODUCTS:
      return {
        ...state,
        getfeaturedProducts: action.payload,
      };
    case GETALLFEATUREDPRODUCTS:
      return {
        ...state,
        getAllfeaturedProducts: action.payload,
      };
    case SELECTEDPRODUCTS:
      return {
        ...state,
        getSelectedProducts: action.payload,
      };
    case SELECTEDITEMARRAY:
      return {
        ...state,
        selectedArray: action.payload,
      };
    case SEARCHSELECTEDITEMARRAY:
      return {
        ...state,
        selectedArrayInSearch: action.payload,
      };
    case BOOKASLOTAPI:
      return {
        ...state,
        bookASlotDates: action.payload,
      };
    case FAVOURITESITEM:
      return {
        ...state,
        getfavouritesItems: action.payload,
      };
    case SPECIFICORDERS:
      return {
        ...state,
        getSpecificOrders: action.payload,
      };
    case ADDRESS:
      return {
        ...state,
        setAddress: action.payload,
      };
    case GETBRANDS:
      return {
        ...state,
        getBrandsItems: action.payload,
      };
    case GETDATES:
      return {
        ...state,
        getDates: action.payload,
      };
    case SELCTEDDATE:
      return {
        ...state,
        getSelectedDate: action.payload,
      };
    case ISADDRESSISNULL:
      return {
        ...state,
        isAddressNull: action.payload,
      };
    case GETALLREVIEW:
      return {
        ...state,
        getAllReviews: action.payload,
      };
    case BOOKASLOTAMOUNT:
      return {
        ...state,
        bookASlotmountDetails: action.payload,
      };
    case LOYALITYPOINTS:
      return {
        ...state,
        loyalityPointAmount: action.payload,
      };
    case VOUCHERPRICE:
      return {
        ...state,
        voucherAmount: action.payload,
      };
    case ISFROMHOMEVIEW:
      return {
        ...state,
        isFromHome: action.payload,
      };
    case PRODUCTSCATEGORYBYID:
      return {
        ...state,
        getProductsbyCategoryID: action.payload,
      };
    case RESETPRODUCTSBYID:
      return {
        ...state,
        getProductsbyCategoryID: initialState.getProductsbyCategoryID,
      };
    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case BANNERS:
      return {
        ...state,
        banners: action.payload,
      };
    case GETMAINALLGETOGORIES:
      return {
        ...state,
        allMainCategories: action.payload,
      };
    case SELECTEDADDRESSITEM:
      return {
        ...state,
        selectedAddress: action.payload,
      };
    case RADEEMABLEPOINTS:
      return {
        ...state,
        radeemPoints: action.payload,
      };
    case ISCHECKOUTTRUE:
      return {
        ...state,
        isCheckoutButtonEnable: action.payload,
      };
    case FINDPOSTALCODE:
      return {
        ...state,
        setpostalCode: action.payload,
      };
    case ISADDRESSLOADED:
      return {
        ...state,
        isAddressLoaded: action.payload,
      };
    case SELECTEDTOWN:
      return {
        ...state,
        selectedTown: action.payload,
      };
    case SELECTEDCOUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    case SELECTEDPOSTALCODE:
      return {
        ...state,
        selectedpostalCode: action.payload,
      };
    case ISADDRESSSELECTED:
      return {
        ...state,
        addressSelected: action.payload,
      };
    case SELECTEDADDRESSLINE1:
      return {
        ...state,
        addressLine1: action.payload,
      };
    case SELECTEDADDRESSLINE2:
      return {
        ...state,
        addressLine2: action.payload,
      };
    case SELECTEDADDRESSLINE3:
      return {
        ...state,
        addressLine3: action.payload,
      };
    case SETHEIGHT:
      return {
        ...state,
        setHeight: action.payload,
      };
    case ENTEREDPOSTALCODE:
      return {
        ...state,
        enteredpostalCode: action.payload,
      };
    case RESETITEM:
      return {
        ...state,
        enteredpostalCode: initialState.enteredpostalCode,
        setHeight: initialState.setHeight,
        addressLine1: initialState.addressLine1,
        addressLine2: initialState.addressLine2,
        addressLine3: initialState.addressLine3,
        setpostalCode: initialState.setpostalCode,
        isAddressLoaded: initialState.isAddressLoaded,
        selectedTown: initialState.selectedTown,
        selectedCountry: initialState.selectedCountry,
        selectedpostalCode: initialState.selectedpostalCode,
        addressSelected: initialState.addressSelected,
      };
    default:
      return state;
  }
};

export default placeReducer;
