import React from 'react';
import utilStyles from '../styles/utils.module.css';

const teamRoster = JSON.parse(`[
	{
			"number": "88",
			"name": "Brent Burns",
			"position": "D",
			"age": "35",
			"years": "16",
			"salary": " $10,000,000",
			"drafted": "2003 MIN 1st (20)",
			"birthdate": "March 9, 1985",
			"_id": "burnsbr01"
	},
	{
			"number": "55",
			"name": "Alexander Chmelevski",
			"position": "F",
			"age": "21",
			"years": "R",
			"salary": "N/A",
			"drafted": "2017 SJS 6th (185)",
			"birthdate": "June 9, 1999",
			"_id": "chmelal01"
	},
	{
			"number": "39",
			"name": "Logan Couture (C)",
			"position": "F",
			"age": "31",
			"years": "11",
			"salary": " $9,000,000",
			"drafted": "2007 SJS 1st (9)",
			"birthdate": "March 28, 1989",
			"_id": "coutulo01"
	},
	{
			"number": "16",
			"name": "Ryan Donato",
			"position": "F",
			"age": "24",
			"years": "3",
			"salary": " $2,150,000",
			"drafted": "2014 BOS 2nd (56)",
			"birthdate": "April 9, 1996",
			"_id": "donatry01"
	},
	{
			"number": "40",
			"name": "Devan Dubnyk",
			"position": "G",
			"age": "34",
			"years": "11",
			"salary": " $1,250,000",
			"drafted": "2004 EDM 1st (14)",
			"birthdate": "May 4, 1986",
			"_id": "dubnyde01"
	},
	{
			"number": "38",
			"name": "Mario Ferraro",
			"position": "D",
			"age": "22",
			"years": "1",
			"salary": " $925,000",
			"drafted": "2017 SJS 2nd (49)",
			"birthdate": "September 17, 1998",
			"_id": "ferrama01"
	},
	{
			"number": "29",
			"name": "Kurtis Gabriel",
			"position": "F",
			"age": "27",
			"years": "3",
			"salary": "N/A",
			"drafted": "2013 MIN 3rd (81)",
			"birthdate": "April 20, 1993",
			"_id": "gabriku01"
	},
	{
			"number": "7",
			"name": "Dylan Gambrell",
			"position": "F",
			"age": "24",
			"years": "3",
			"salary": " $700,000",
			"drafted": "2016 SJS 2nd (60)",
			"birthdate": "August 26, 1996",
			"_id": "gambrdy01"
	},
	{
			"number": "73",
			"name": "Noah Gregor",
			"position": "F",
			"age": "22",
			"years": "1",
			"salary": " $785,000",
			"drafted": "2016 SJS 4th (111)",
			"birthdate": "July 28, 1998",
			"_id": "gregono01"
	},
	{
			"number": "37",
			"name": "Fredrik Handemark",
			"position": "F",
			"age": "27",
			"years": "R",
			"salary": " $792,500",
			"drafted": "",
			"birthdate": "August 27, 1993",
			"_id": "handefr01"
	},
	{
			"number": "48",
			"name": "Tomas Hertl",
			"position": "F",
			"age": "27",
			"years": "7",
			"salary": " $4,750,000",
			"drafted": "2012 SJS 1st (17)",
			"birthdate": "November 12, 1993",
			"_id": "hertlto01"
	},
	{
			"number": "31",
			"name": "Martin Jones",
			"position": "G",
			"age": "31",
			"years": "7",
			"salary": " $6,000,000",
			"drafted": "",
			"birthdate": "January 10, 1990",
			"_id": "jonesma02"
	},
	{
			"number": "9",
			"name": "Evander Kane",
			"position": "F",
			"age": "29",
			"years": "11",
			"salary": " $6,000,000",
			"drafted": "2009 ATL 1st (4)",
			"birthdate": "August 2, 1991",
			"_id": "kaneev01"
	},
	{
			"number": "65",
			"name": "Erik Karlsson",
			"position": "D",
			"age": "30",
			"years": "11",
			"salary": " $12,000,000",
			"drafted": "2008 OTT 1st (15)",
			"birthdate": "May 31, 1990",
			"_id": "karlser01"
	},
	{
			"number": "46",
			"name": "Joel Kellman",
			"position": "F",
			"age": "26",
			"years": "1",
			"salary": "N/A",
			"drafted": "",
			"birthdate": "May 25, 1994",
			"_id": "kellmjo01"
	},
	{
			"number": "71",
			"name": "Nikolai Knyzhov",
			"position": "D",
			"age": "22",
			"years": "1",
			"salary": " $780,000",
			"drafted": "",
			"birthdate": "March 20, 1998",
			"_id": "knyzhni01"
	},
	{
			"number": "32",
			"name": "Josef Korenar",
			"position": "G",
			"age": "23",
			"years": "R",
			"salary": "N/A",
			"drafted": "",
			"birthdate": "January 31, 1998",
			"_id": "korenjo01"
	},
	{
			"number": "62",
			"name": "Kevin Labanc",
			"position": "F",
			"age": "25",
			"years": "4",
			"salary": " $3,200,000",
			"drafted": "2014 SJS 6th (171)",
			"birthdate": "December 12, 1995",
			"_id": "labanke01"
	},
	{
			"number": "43",
			"name": "John Leonard",
			"position": "F",
			"age": "22",
			"years": "R",
			"salary": " $925,000",
			"drafted": "2018 SJS 6th (182)",
			"birthdate": "August 7, 1998",
			"_id": "leonajo01"
	},
	{
			"number": "84",
			"name": "Maxim Letunov",
			"position": "F",
			"age": "24",
			"years": "1",
			"salary": "N/A",
			"drafted": "2014 STL 2nd (52)",
			"birthdate": "February 20, 1996",
			"_id": "letunma01"
	},
	{
			"number": "12",
			"name": "Patrick Marleau",
			"position": "F",
			"age": "41",
			"years": "22",
			"salary": " $700,000",
			"drafted": "1997 SJS 1st (2)",
			"birthdate": "September 15, 1979",
			"_id": "marlepa01"
	},
	{
			"number": "28",
			"name": "Timo Meier",
			"position": "F",
			"age": "24",
			"years": "4",
			"salary": " $4,000,000",
			"drafted": "2015 SJS 1st (9)",
			"birthdate": "October 8, 1996",
			"_id": "meierti01"
	},
	{
			"number": "1",
			"name": "Alexei Melnichuk",
			"position": "G",
			"age": "22",
			"years": "R",
			"salary": "N/A",
			"drafted": "",
			"birthdate": "June 29, 1998",
			"_id": "melnial01"
	},
	{
			"number": "53",
			"name": "Nicolas Meloche",
			"position": "D",
			"age": "23",
			"years": "R",
			"salary": "N/A",
			"drafted": "2015 COL 2nd (40)",
			"birthdate": "July 18, 1997",
			"_id": "melocni01"
	},
	{
			"number": "21",
			"name": "Jacob Middleton",
			"position": "D",
			"age": "25",
			"years": "2",
			"salary": " $700,000",
			"drafted": "2014 LAK 7th (210)",
			"birthdate": "January 2, 1996",
			"_id": "middlja01"
	},
	{
			"number": "83",
			"name": "Matt Nieto",
			"position": "F",
			"age": "28",
			"years": "7",
			"salary": "N/A",
			"drafted": "2011 SJS 2nd (47)",
			"birthdate": "November 5, 1992",
			"_id": "nietoma01"
	},
	{
			"number": "11",
			"name": "Stefan Noesen",
			"position": "F",
			"age": "27",
			"years": "6",
			"salary": " $925,000",
			"drafted": "2011 OTT 1st (21)",
			"birthdate": "February 12, 1993",
			"_id": "noesest01"
	},
	{
			"number": "50",
			"name": "Brinson Pasichnuk",
			"position": "D",
			"age": "23",
			"years": "R",
			"salary": "N/A",
			"drafted": "",
			"birthdate": "November 24, 1997",
			"_id": "pasicbr01"
	},
	{
			"number": "51",
			"name": "Radim Simek",
			"position": "D",
			"age": "28",
			"years": "2",
			"salary": " $2,450,000",
			"drafted": "",
			"birthdate": "September 20, 1992",
			"_id": "simekra01"
	},
	{
			"number": "20",
			"name": "Marcus Sorensen",
			"position": "F",
			"age": "28",
			"years": "4",
			"salary": " $1,500,000",
			"drafted": "2010 OTT 4th (106)",
			"birthdate": "April 7, 1992",
			"_id": "sorenma01"
	},
	{
			"number": "44",
			"name": "Marc-Edouard Vlasic",
			"position": "D",
			"age": "33",
			"years": "14",
			"salary": " $7,250,000",
			"drafted": "2005 SJS 2nd (35)",
			"birthdate": "March 30, 1987",
			"_id": "vlasima01"
	}
]`);

const TeamRosterStats = () => {
	return (
		<div className={utilStyles.tableContainer}>
			<table className={utilStyles.table}>
				<thead>
					<tr>
						<th>#</th>
						<th>Player</th>
						<th>POS</th>
						<th>AGE</th>
						<th>YRS</th>
						<th>SAL</th>
						<th>DRAFT</th>
						<th>BIRTH</th>
					</tr>
				</thead>
				<tbody>
					{teamRoster.length > 0 &&
						teamRoster.map(player => (
							<tr key={player._id}>
								<td>{player.number}</td>
								<td data_id='name'>{player.name}</td>
								<td data_id='position'>{player.position}</td>
								<td>{player.age}</td>
								<td>{player.years}</td>
								<td>{player.salary}</td>
								<td>{player.drafted}</td>
								<td>{player.birthdate}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default TeamRosterStats;
