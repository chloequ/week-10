# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

The application I would like to build aims to map out the usage pattern for
each Indego Bikeshare Station in Philadelphia. Ideally, the final visualization
will be based on docking capacity, number of rides, type of trips of the
stations. Specific information(address/numbers/charts) for each station will be
displayed when user clicks on the corresponding marker on the map. At the same
time, a biking traffic volume polyline layer would be generated to highlight
the hottest bike network section.


## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

The potential data sources are listed below:
1. 2016 Indego Trip Data provided by OpenDataPhilly. They are CSV files, I
will use online services to convert them to geojson files
2. Indego Bike Share Stations JSON data provided by OpenData Philly
3. Philadelphia Bike Network JSON data probided by OpenData Philly

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

For developing this application, I plan to use the following libraries:
1. Leaflet: use L.geoJSON, L.polyline, L.circleMarker to map out the bikeshare
station and trip routes based on their properties
2. JQuery: use $.ajax to pass the JSON data to leaflet functions
3. Mapzen: use optimized routes to simulate bike traffic flows
4. Chart.js

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
- What do they gain from your application' use?
- Are there any website/application examples in the wild to which you can compare your final?

This application is designed for the decision makers of future improvements
for Indego Bikeshare. By mapping out the usage pattern of each docking station,
the decision makers will get a sense about the demand of bikeshare users, and
ideally the gaps between current bikeshare supply and demand.

A good comparison for the application I want to build: http://urbica.co/bikes/

#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through modals, through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

The application requires a map zone and a side bar to show the basic
information, usage statistics, and charts for
each docking station.

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

Since the Indego trip data are not grouped by docking station ID, one of the
difficulty of these project is to reorganize data based on docking station.
One solution is to edit the csv data in excel and regroup the trip data to
docking station, and then convert the csv file to geoJSON.

The other problem is how to combine multiple trip routes polylines that overlap
at the same section of bike network to a bold polyline to display the bike
traffic volume. The possible solution is to use spatial join to counts the
number of routes that intersect with each polyline of bike network. Currently
I haven't identified a solution to spatial join polylines in Javascript.


## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).

Many spatial analysis processes involve with dealing with statistics, is it
possible to generate statistics in Javascript? For example, in my project, if
I would like to highlight the docking stations with a high ratio of number
of rides to docking capacity (which means the supply may not meet the demand),
is there a good way to generate these statistics in Javascript other than
calculate them by myself before I import the data to Javascript?
