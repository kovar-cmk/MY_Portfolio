import { color } from "framer-motion";
import {
  RH,
  Pentest,
  creator,
  CISCO,
  Juniper,
  Mikrotik,
  Cisco_tech,
  Aruba,
  PF_sense,
  Open_sense,
  AWS,
  Azure,
  Microsoft_Server,
  VMware,
  Prox_mox,
  docker,
  Pentesting,
  Networking,
  System_Administration,
  Arena_Cyber_Gaming,
  Beta_School,
  Asylum_Arena,
  UBUNTU,
  Elastic,
  SEIM,
  Honey_POT,
  malware_Anaisys,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cisco Certified",
    icon: CISCO,
    url:'https://www.credly.com/badges/411398ce-b60d-4de0-9dcb-81a2eb4fe6a8',
  },
  {
    title: " System Admin",
    icon: RH, 
    url:'../../src/assets/New folder (2)/Abdelbasset Benghina - 2023-10-14-1.png',
    
  },
  {
    title: "Penetration Testor",
    icon: Pentest,
        url:'https://tryhackme.com/p/kovar',
  },
  {
    title: "Content Creator",
    icon: creator,
        url:'https://www.youtube.com/channel/UCMFff7T3zPE_W0YL4uuq_Kw',
  },
];

const technologies = [
  {
    name: "Cisco",
    icon: Cisco_tech,
  },
  {
    name: "Aruba",
    icon: Aruba,
  },
  {
    name: "Juniper",
    icon: Juniper,
  },
  {
    name: "Elastic Cloud",
    icon: Elastic,
  },
  {
    name: "Mikrotik",
    icon: Mikrotik,
  },
  {
    name: "PF-sense",
    icon: PF_sense,
  },
  {
    name: "Open-sense",
    icon: Open_sense,
  },
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "Azure",
    icon: Azure,
  },
  {
    name: "Microsoft Server",
    icon: Microsoft_Server,
  },
  {
    name: "Ubuntu Server",
    icon: UBUNTU,
  },
  {
    name: "VMware",
    icon: VMware,
  },
  {
    name: "Prox mox",
    icon: Prox_mox,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Networking" , 
    company_name: "Virtual Network - EVE-NG/GNS3",
    icon: Networking,
    iconBg: "#383E56",
    points: [
      "Routing Protocols - EBGP/IBGP/OSPF/IS-IS/Static/RIP",
      "SWitching Protocols - STP/MSTP/RSTP/vlans/Trunking",
      "Layer 2 Security protocols - Portguard/ARP inspection/VACLs/DHCP snooping/MAC filtering",
      "Automated Infrastracture /Ansible/EEM/Sheduler/Chef ",
      "Data-cente Architecture - SOUth-East Topology (wiht Vxlan)",
      "Multicasting with VRF-BFD-OSPF and BGP - PIM-D/Pim-SP/IGMPv3",
    ],
  },
  {
    title: "System Administration",
   
    icon: System_Administration,
    iconBg: "#E6DEDD",
    points: [
     "Proficiency in operating systems such as Windows, Linux, or macOS",
     "Familiarity with network protocols and technologies such as TCP/IP, DNS, DHCP, and HTTP",
     "Experience with virtualization technologies such as VMware, Hyper-V, or VirtualBox",
     "scripting languages such as PowerShell, Bash and Python",
     "Familiarity with cloud computing platforms such as AWS, Azure, or Google Cloud",
     "Experience with containerization technologies such as Docker or Kubernetes",
     "Experience with system administration tools such as Nagios, Prometheus, Splunk",
     "ITIL4",
    ],
    
  },    

  {
    title: "Penetration Testing",
    company_name: "Tryhackme",
    icon: Pentesting,
    iconBg: "#383E56",
   
    points: [
      "Top 10 OWASP ", 
      "PortSwigger Academy",
      "ROOMS : " ,
      "-         Mr Robot CTF.",
      "-         Pickle Rick.",
      "-         OSINT.",
      "-         Splunk.",
      "-         wreath Network.",
      "-         C4ptur3-th3-fl4g",
  
    ],
  },
 
];



const projects = [
  {
    name: "Asylum Arena ",
    image: Asylum_Arena,
    description:
      "Gaming Caffe , that Provides Online Compitive Gaming , they called me out for a design and configuration of the Infrastructure where they can deliver Online Gaming as a product smoothly. The Design was to Transfer the connection from another source of Fiber Connection through outdoor Antna to the Caffe where the store is . ",
    tags: [
      {
        name: "TP-Link",
        color: "green-text-gradient",
      },
      {
        name: "Windows Server",
        color: "blue-text-gradient", 
      },
      {
        name: "Mikro-Tik",
        color: "pink-text-gradient",
      },
    ],
    image: Asylum_Arena,
    source_code_link: "https://github.com/",
  },
  {
    name: "Arena Cyber Gaming ",
    description:
      "Esstablishing a gaming caffe and segment the Netowk resource with implement the best pracices stratigies for Zero Network Resource waste , and installing Ubuntu Server for Caching Games so the hosts do not repeatedlly downlowd the game from the Internet each Time from the internet, and lastly chaking the Quality of Service of Gaming properties and sets aletrs in the Server whenever the rousource is consumed  .",
    tags: [
      {
        name: "CISCO ",
        color: "blue-text-gradient",
      },
      {
        name: "Tp-Link",
        color: "green-text-gradient",
      },
      {
        name: "Ubuntu",
        color: "pink-text-gradient",
      },
    ],
    image: Arena_Cyber_Gaming,
    source_code_link: "https://github.com/",
  },
  {
    name: "Beta School",
    description:
      "Setting Up and configuring The Network for a large Data-Base premis and integrating the use of Wi-fi Voucher Code as A service on PF-Sence , connecting and configuring Printers and optimise the network Use .",
    tags: [
      {
        name: "Windows Server",
        color: "blue-text-gradient",
      },
      {
        name: "PF-Sense",
        color: "green-text-gradient",
      },
      {
        name: "Wireshark",
        color: "blue-text-gradient",
      },
    ],
    image: Beta_School,
    source_code_link: "https://github.com/",
  },
  {
    name: "Elastic Cloud - SEIM",
    description:["Comprehensive Prevention: Stop malware, ransomware, and malicious behaviors with precision.",
                 "High-Fidelity Alerts: Minimize false positives and detect threats swiftly for enhanced team efficiency.",
                 "Deep Visibility: Gain unparalleled insights into your environment with minimal data overhead.",
                 "Rapid Triage and Response: Act swiftly to mitigate threats and minimize impact.",
                 "Cloud Workload Protection: Secure cloud-native applications with real-time visibility and automated threat detection.",
  ],
    tags: [
      {
        name: "Ubuntu Server",
        color: "blue-text-gradient",
      },
      {
        name: "Elastic Cloud",
        color: "green-text-gradient",
      },
      {
        name: "Wireshark",
        color: "blue-text-gradient",
      },
    ],
    image: SEIM,
    source_code_link: "https://github.com/",
  },
 {
  name: "HoneyPOT - Tpot",
  description:
  "Our Honeypot infrastructure is strategically designed to emulate vulnerable systems and services, enticing malicious actors to interact with them. Through this interaction, we gather valuable threat intelligence, including attack vectors, malware samples, and reconnaissance activities.",
  tags: [
    {
      name: "Ubuntu Server",
      color: "green-text-gradient",
    },
    {
      name: "Tpot",
      color: "pink-text-gradient",
    },
    {
      name: "Wireshark",
      color: "blue-text-gradient",
    },
    {
      name: "Python",
      color: "white-text-gradient",
    },
  ],
  
  image: Honey_POT,
  source_code_link: "https://github.com/",
  },
  {
    name: "Malware analisys - FlareVM",
    description:
              ["As the architect behind this advanced lab, I've meticulously crafted an environment that empowers analysts to dissect and understand malicious software with unparalleled depth and efficiency.",
             " With FlareVM, I have engineered a Windows-based virtual machine that serves as the cornerstone of our analysis infrastructure. Equipped with tools honed by FireEye's elite FLARE team, FlareVM offers a dynamic environment optimized for both dynamic and static malware analysis. ",],
    tags: [
      {
        name: "Ubuntu Server",
        color: "green-text-gradient",
      },
      {
        name: "Vmware",
        color: "pink-text-gradient",
      },
      {
        name: "Remnux",
        color: "blue-text-gradient",
      },
      {
        name: "flareVM",
        color: "white-text-gradient",
      },
    ],
    
    image: malware_Anaisys,
    source_code_link: "https://github.com/",
    },

];

export { services, technologies, experiences, projects };
