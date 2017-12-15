
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donors').del()
    .then(function () {
      // Inserts seed entries
      return knex('donors').insert([
        {name: 'Bob Kirby', address_1: '123 Main St.', address_2: 'Unit 116', city_town: 'Phoenix', state: 'AZ', zip_code: '08555', phone: '(602) 555-1111', email: 'bob@kirby.com', program_interests: 'Hunger', comments: 'to be added by donor relations staff'},

        {name: 'Kevin Malko', address_1: '56 Fox Chase Run', address_2: '', city_town: 'Hillsborough', state: 'NJ', zip_code: '08502', phone: '(908) 555-2222', email: 'kevin@malko.com', program_interests: 'Homelessness', comments: 'to be added by donor relations staff'},

        {name: 'Amanda Casper', address_1: '144 Evergreen Ave.', address_2: 'Apt# 7', city_town: 'Manville', state: 'AZ', zip_code: '08999', phone: '(602) 555-1212', email: 'manda@casper.com', program_interests: 'Elder Care', comments: 'to be added by donor relations staff'},

        {name: 'Martha Jones', address_1: '5 Yucka Trail', address_2: '', city_town: 'Tuscan', state: 'AZ', zip_code: '08111', phone: '(602) 555-3731', email: 'martha@jones.com', program_interests: 'Hunger', comments: 'to be added by donor relations staff'},

        {name: 'Brian Conohan', address_1: '511 Beverly Dr.', address_2: 'Unit 12', city_town: 'Tuscan', state: 'AZ', zip_code: '08471', phone: '(602) 555-4444', email: 'brian @conohan.com', program_interests: 'Hunger', comments: 'to be added by donor relations staff'},

        {name: 'Bryan Veto', address_1: '10 Noway Ave.', address_2: '', city_town: 'Gilbert', state: 'AZ', zip_code: '08222', phone: '(602) 555-3434', email: 'brian@veto.com', program_interests: 'Education', comments: 'to be added by donor relations staff'},

        {name: 'Adam Schwartz', address_1: '54 Warrington Way', address_2: '', city_town: 'Chandler', state: 'AZ', zip_code: '08243', phone: '(602) 555-7483', email: 'adam@schwartz.com', program_interests: 'Education, Hunger', comments: 'to be added by donor relations staff'},

        {name: 'Karen VanCleef', address_1: '7 Peidmont Path', address_2: 'Apt# 111', city_town: 'Montgomery', state: 'AL', zip_code: '05894', phone: '(717) 555-9191', email: 'karen@vancleef.com', program_interests: 'Elder Care', comments: 'to be added by donor relations staff'},

        {name: 'Marlon Smith', address_1: '69 Shelbourne Place', address_2: '', city_town: 'Surprise', state: 'AZ', zip_code: '09531', phone: '(888) 555-8585', email: 'marlon@young.com', program_interests: 'Homelessness', comments: 'to be added by donor relations staff'},

        {name: 'Betsy McBuggler', address_1: '121 N. 34th Ave.', address_2: 'Suite 300', city_town: 'Phoenix', state: 'AZ', zip_code: '09531', phone: '(888) 326-9900', email: 'betsyrules@mcb.com', program_interests: 'Homelessness', comments: 'to be added by donor relations staff'},

        {name: 'Winston Madison', address_1: '647 Garrison Court', address_2: '', city_town: 'Hull', state: 'MA', zip_code: '26276', phone: '(626) 762-1204', email: 'winston@madison.com', program_interests: 'Elder Care', comments: 'to be added by donor relations staff'},

        {name: 'Andrew Cappelini', address_1: '54 E. 14th St.', address_2: 'Unit 62B', city_town: 'Phoenix', state: 'AZ', zip_code: '09579', phone: '(408) 300-9786', email: 'andy@cappelini.com', program_interests: 'Homelessness', comments: 'to be added by donor relations staff'},

        {name: 'Jill Masters', address_1: '12 Boston Way', address_2: 'Apt# 311', city_town: 'Fairmont', state: 'NV', zip_code: '75664', phone: '(776) 565-7776', email: 'jillian@masters', program_interests: 'Hunger', comments: 'to be added by donor relations staff'},

        {name: 'Arther McJames', address_1: '115 Georgia Ave.', address_2: '', city_town: 'Tempe', state: 'AZ', zip_code: '08534', phone: '(602) 997-9090', email: 'arthur@jamesmc.com', program_interests: 'Homelessness', comments: 'to be added by donor relations staff'},

        {name: 'Karen Huey', address_1: '69 Pickle Me Rd.', address_2: '', city_town: 'Phoenix', state: 'AZ', zip_code: '08772', phone: '(602) 387-0001', email: 'k177@huey.com', program_interests: 'Education', comments: 'to be added by donor relations staff'},

        {name: 'Christopher Scott', address_1: '98 Reddington Court', address_2: 'Suite 112', city_town: 'Phoenix', state: 'AZ', zip_code: '08405', phone: '(726) 645-8191', email: 'cjs71@scott.com', program_interests: 'Education', comments: 'to be added by donor relations staff'},

        {name: 'Kirsten Blume', address_1: '53427 Compton St.', address_2: 'Apt# 7', city_town: 'Burbank', state: 'CA', zip_code: '91604', phone: '(818) 766-9445', email: 'kblume@blumming.com', program_interests: 'Hunger', comments: 'to be added by donor relations staff'}
      ]);
    });
};
