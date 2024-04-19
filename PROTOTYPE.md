## Task 2: Reviewing a Prototype Application


#### Synopsis
The following is a description of my first impressions around the prototype control software. I will be giving at most, one hour on my analysis of the following task.


### Design

#### Observations
At first glance, it is clear that there will be a large number of operations expected to run with a moderately low level of latency and high level of efficiency. Processng wave functions alongside different streams of data by Agito Trax categories and information to the nearest millisecond feels like a core requirement that may provide a technical challenge to achieving an ideal implementation.
The required responsiveness for the control software's data visualisation needs some consideration as well. 

The visual appearance of the prototype appears somewhat monolithic in the sense that multiple, lightweight, smaller applications could perform the same task in the form of serverless architectures. If smaller systems drive specific tasks, each system can perform each task more effectively. For instance; one system for control and customisation, and a separate system for visualisation of time-series data. The issue of latency between systems to an extent becomes an issue, but at the very least, tasks are encapsulated more securely and then optimisations can be provided more effectively. 

#### Points of Discussion
There are several caveats to consider here:
- How responsive does the application need to be?
- How responsive does the hardware need to be in response to customisation changes and UI input? How is this achieved?
- What benchmarks are we using to confirm and validate this?
- Will the scalability of the data ingested change at any point? If so, how does this change any decisions made to the UI? 


#### Approach to Development
- Have two separate serverless systems for control and customisation of the Agito Trax
- By doing so, data visualisation can be performed in batches. This means full-stack practices and approaches are not dependent on matching the performance of the low-level hardware. This is especially important considering the performance differences of NodeJS vs the low-level data-streams.
- For effective communication and fault tolerance guarding, a serverless React application driven and deployed on AWS Lambdas with IaaC automation in the form of Terraform within workflows would be a good approach to start. 
- The existing functionality around the control and customisation of the hardware can then be replicated on a platform that better prioritises performance