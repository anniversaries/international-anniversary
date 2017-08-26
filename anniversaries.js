/**
 * Created by toubou91 on 26/08/2017.
 */
var registeredAnniversaries = {
    "January 1": "New Year's Day",
    "January 4": "World Braille Day",
    "January 11": "International Parity at Work Day",
    "January 18": "International Religion Day",
    "January 23": "International Freedom Day",
    "January 26": "International Fisherman Day, International Environmental Education Day,International Customs Day",
    "January 27": "International Holocaust Remembrance Day, International Outer Space Day",
    "January 28": "International Reducing CO2 Emissions Day",
    "January 30": "International of Nonviolence and Peace Day",
    "January 31": "Street Children's Day",
    "February 2": "World Wetlands Day",
    "February 4": "World Cancer Day",
    "February 6": "International Day of Zero Tolerance to Female Genital Mutilation",
    "February 11": "World Day of the Sick",
    "February 13": "World Radio Day",
    "February 14": "World Valentine Day",
    "February 15": "World Cholangiocarcinoma Day",
    "February 20": "World Day of Social Justice",
    "February 21": "International Mother Language Day",
    "February 22": "A Day Without News",
    "February 24": "Defend the Donut Day",
    "February 27": "World NGO Day",
    "March 1": "World Civil Defence Day",
    "March 3": "World Wildlife Day",
    "March 8": "International Women's Day",
    "March 15": "World Consumer Rights Day World Contact Day",
    "March 20": "World Oral Health Day, International Day of Francophonie, International Day of Happiness, World Sparrow Day",
    "March 21": "International Day for the Elimination of Racial Discrimination, World Poetry Day, International Day of Nowruz, World Down Syndrome Day, World Puppetry Day, International Day of Forests",
    "March 22": "World Water Day",
    "March 23": "World Meteorological Day",
    "March 24": "World Tuberculosis Day",
    "March 25": "International Day of Remembrance of the Victims of Slavery and the Transatlantic Slave Trade, observance of National Genocide Day",
    "March 27": "International launch of Global Money Week, World Theatre Day",
    "April 1": "World April Fools' Day",
    "April 2": "World Autism Awareness Day, International Children's Book Day",
    "April 7": "Day of Remembrance of the Victims of the Rwanda,World Health Day",
    "April 8": "International Romani Day",
    "April 17": "World Hemophilia Day",
    "April 18": "International Day For Monuments and Sites",
    "April 20": "International day for cannabis-related protests and events",
    "April 22": "International Mother Earth Day",
    "April 23": "World Book and Copyright Day, English Language Day",
    "April 24": "World Day for Laboratory Animals",
    "April 25": "World Malaria Day",
    "April 26": "World Intellectual Property Day",
    "April 28": "World Day for Safety and Health at Work",
    "April 29": "Day of Remembrance for all Victims of Chemical Warfare, nternational Dance Day, International Bee Day",
    "April 30": "International Jazz Day",
    "May 1": "May Day, International Workers' Day",
    "May 3": "World Press Freedom Day",
    "May 4": "International Firefighters' Day: Star Wars Day",
    "May 5": "International Midwives Day",
    "May 8": "World Red Cross and Red Crescent Day",
    "May 8-9": "Time of Remembrance and Reconciliation for Those Who Lost Their Lives during the Second World War",
    "May 9": "Europe Day",
    "May 10": "International Migratory Bird Day",
    "May 12": "International Nurses Day",
    "May 15": "International Day of Families",
    "May 17": "World Telecommunication and Information Society Day, International Day Against Homophobia and Transphobia",
    "May 18": "World AIDS Vaccine Day, International AIDS Candlelight Memorial, International Museum Day",
    "May 21": "World Day for Cultural Diversity for Dialogue and Development",
    "May 22": "International Day for Biological Diversity",
    "May 25": "Geek Pride Day, Towel Day",
    "May 29": "International Day of UN Peacekeepers",
    "May 31": "World No-Tobacco Day[10]",
    "1st Tue in May": "World Asthma Day",
    "1st Sunday in May": "World Laughter Day",
    "2nd Sat in May": "World Fair Trade Day",
    "2nd Sun in May": "Mother's Day",
    "Full moon in May": "Vesak[12]",
    "A weekend in May": "World Migratory Bird Day",
    "June 1": "Global Day of Parents, International Children's Day, World Milk Day",
    "June 4": "International Day of Innocent Children Victims of Aggression",
    "June 5": "World Environment Day",
    "June 6": "World Pest Day",
    "June 8": "World Oceans Day",
    "June 12": "International Shia Day[14], World Day Against Child Labour[12][15]",
    "June 14": "World Blood Donor Day[10]",
    "June 15": "Global Wind Day, World Elder Abuse Awareness Day",
    "June 17": "World Day to Combat Desertification and Drought",
    "June 18": "Autistic Pride Day",
    "June 20": "World Refugee Day",
    "June 21": "World Music Day: International Day of Yoga",
    "June 23": "World Whistleblowers Day, International Widow's Day",
    "June 25": "World Vitiligo Day",
    "June 26": "International Day against Drug Abuse and Illicit Trafficking, United Nations International Day in Support of Victims of Torture",
    "June 30": "United Nations International Asteroid Day raises public awareness of the asteroid impact hazard",
    "3rd Sun in Jun": "Fathers' Day in some countries",
    "1st Sat in Jul": "International Day of Cooperatives",
    "July 7": "World Chocolate Day",
    "July 11": "World Population Day",
    "July 12": "Malala Day",
    "July 15": "World Youth Skills Day",
    "July 17": "World Day for International Justice",
    "July 18": "Nelson Mandela International Day",
    "July 26": "International Day for the Conservation of the Mangrove Ecosystem",
    "July 28": "World Hepatitis Day[10]",
    "July 29": "International Tiger Day",
    "July 30": "International Day of Friendship, World Day against Trafficking in Persons",
    "1st Fri in Aug": "International Beer Day",
    "August 4": "Aboriginal Children's Day",
    "August 8": "World Cat Day",
    "August 9": "International Day of the World's Indigenous People",
    "August 12": "International Youth Day",
    "August 13": "International Lefthanders Day",
    "August 14": "Pakistan Independence Day",
    "August 15": "India Independence Day",
    "August 19": "World Humanitarian Day",
    "August 21": "World Fashion Day",
    "August 23": "International Day for the Remembrance of the Slave Trade and its Abolition",
    "August 29": "International Day against Nuclear Tests",
    "August 30": "International Day of the Disappeared",
    "September 5": "International Day of Charity [12]",
    "Pakistan Defense Day   September 8": "International Literacy Day",
    "September 10": "World Suicide Prevention Day",
    "September 15": "International Day of Democracy",
    "September 16": "International Day for the Preservation of the Ozone Layer",
    "September 18": "World Water Monitoring Day",
    "September 19": "International Talk Like a Pirate Day",
    "September 21": "International Day of Peace",
    "September 26": "European Day of Languages",
    "September 27": "World Tourism Day",
    "September 28": "World Rabies Daym, International Right to Know Day[16], International Safe Abortion Day[17]",
    "September 29": "World Heart Day, International Coffee Day",
    "September 30": "Blasphemy Day, International Translation Day",
    "October 1": "International Day of Older Persons, World Vegetarian Day",
    "October 2": "International Day of Non-Violence, World Cerebral Palsy Day",
    "October 5": "World Teachers' Day",
    "October 9": "World Post Day",
    "October 10": "World Mental Health Day",
    "October 11": "International Day of the Girl Child",
    "October 13": "World Thrombosis Day[18], International Day for Disaster Reduction",
    "October 14": "World Standards Day",
    "October 15": "Global Handwashing Day",
    "October 16": "World Food Day, National Boss Day (Boss's Day)",
    "October 17": "International Day for the Eradication of Poverty",
    "October 18": "World Vasectomy Day[19]",
    "October 20": "World Osteoporosis Day[20], World Statistics Day",
    "October 22": "International Stuttering Awareness Day",
    "October 24": "United Nations Day, World Tripe Day, World Development Information Day",
    "October 26": "Intersex Awareness Day",
    "October 27": "World Day for Audiovisual Heritage",
    "October 28": "International Animation Day",
    "October 29": "World Stroke Day",
    "1st Mon in Oct": "World Habitat Day",
    "2nd Thu in Oct": "World Sight Day",
    "1st Fri in Oct": "World Smile Day[21]",
    "2nd Sat in Oct": "International Migratory Bird Day",
    "November 1": "World Vegan Day",
    "November 6": "International Day for Preventing the Exploitation of the Environment in War and Armed Conflict",
    "November 8": "International Day of Radiology",
    "November 10": "World Science Day for Peace and Development",
    "November 12": "World Pneumonia Day",
    "November 13": "World Kindness Day",
    "November 14": "World Diabetes Day, Children's Day",
    "November 15": "Day of the Imprisoned Writer",
    "November 16": "International Day for Tolerance",
    "November 17": "International Students Day, World Prematurity Day, International Candidate Attorney Day",
    "November 19": "International Men's Day (Trinidad and Tobago, Jamaica, Australia, India, United States, Singapore, Malta, United Kingdom, South Africa, Hungary, Ireland, Ghana, Canada, Denmark, Austria, France, Pakistan, Antigua and Barbuda, St. Kitts and Nevis and Grenada)",
    "November 20": "Universal Children's Day, Transgender Day of Remembrance, Africa Industrialization Day",
    "November 21": "World Television Day, World Hello Day",
    "November 25": "International Day for the Elimination of Violence against Women",
    "November 29": "International Day of Solidarity with the Palestinian People",
    "3rd Thu in Nov": "World Philosophy Day",
    "3rd Sun in Nov": "World Day of Remembrance for Road Traffic Victims",
    "December 1": "World AIDS Day",
    "December 2": "International Day for the Abolition of Slavery",
    "December 3": "International Day of Persons with Disabilities",
    "December 4": "International Cheetah Day",
    "December 5": "World Soil Day, International Volunteer Day for Economic and Social Development",
    "December 7": "International Civil Aviation Day",
    "December 9": "International Anti-Corruption Day",
    "December 10": "Human Rights Day",
    "December 11": "International Mountain Day",
    "December 18": "International Migrants Day",
    "December 20": "International Human Solidarity Day",
    "December 29": "International Cello Day"
};