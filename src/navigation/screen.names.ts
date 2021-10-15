const common = {
  login: "LoginScreen",
  registration: "RegistrationScreen",
  app: "App",
  events: {
    // Create Events
    basicDetails: "BasicDetails",
    ceEventDesc: "CreateEventDescription",
    planningDetails: "PlanningDetails",
    ceContactDetails: "CreateContactDetails",
    ceSummary: "CreateEditSummary",

    // Event details
    eventDetails: "EventDetails",
    registerEvent: "RegisterEvent",
  },
};

const app = {
  home: "Home",
  events: "Events",
  requests: "Requests",
  profile: "Profile",
  volunteer: "Volunteer",
};

// TODO Request and Event creation and updating are modals

// Subpages (make this unique)
const home = {
  listView: "HomeListView",
  mapView: "HomeMapView",
};

const events = {
  eventsListView: "eventsListView",
  eventHistoryDetails: "EventHistoryDetails",
  eventProgress: "EventProgress",
  attendeeList: "AttendeeList",
  pendingInvites: "PendingInvites",
};

const requests = {
  requestMap: "RequestMap",
};

const profile = {
  userProfile: "UserProfile",
  statistics: "Statistics",
};

const volunteer = {
  attending: "Attending",
  helpOut: "HelpOut",
};

const SCREEN_NAMES = {
  app,
  common,
  events,
  requests,
  home,
  profile,
  volunteer,
};

export default SCREEN_NAMES;
