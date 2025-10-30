import React, { useState } from 'react';
import darahFamily from './assets/images/darah_family.png';
import darahSchool from './assets/images/darah_school.png';
import darahFriends from './assets/images/darah_friends.png';
import tineFamily from './assets/images/tine_family.png';
import tineSchool from './assets/images/tine_school.png';
import tineFriends from './assets/images/tine_friends.png';
import gerFamily from './assets/images/ger_family.png';
import gerSchool from './assets/images/ger_school.png';
import gerFriends from './assets/images/ger_friends.png';
//


import { ChevronRight, Home, BookOpen, Briefcase, Users } from 'lucide-react';

const IdentityRoomsApp = () => {
  const [currentRoom, setCurrentRoom] = useState(null);
  const [currentPerson, setCurrentPerson] = useState(0);
  const [showReflection, setShowReflection] = useState(false);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f0f4ff',
      padding: '32px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heading1: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#111',
      marginBottom: '16px'
    },
    heading2: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#111',
      marginBottom: '16px'
    },
    heading3: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    button: {
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    gridCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginTop: '32px'
    },
    card: {
      padding: '24px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '2px solid transparent'
    },
    tabsContainer: {
      display: 'flex',
      gap: '8px',
      marginBottom: '24px',
      flexWrap: 'wrap'
    },
    tab: {
      padding: '8px 16px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    contentArea: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      padding: '32px'
    },
    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
      marginBottom: '24px'
    },
    box: {
      padding: '16px',
      borderRadius: '8px',
      borderLeft: '4px solid'
    },
    badge: {
      display: 'inline-block',
      padding: '8px 12px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '500',
      marginRight: '8px',
      marginBottom: '8px'
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '24px',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      color: '#374151'
    }
  };

  const roomColors = {
    family: {
      bg: '#fef3c7',
      text: '#78350f',
      accent: '#f59e0b',
      button: '#3b82f6'
    },
    school: {
      bg: '#cffafe',
      text: '#0c2340',
      accent: '#3b82f6',
      button: '#06b6d4'
    },
    social: {
      bg: '#ffe4e6',
      text: '#831843',
      accent: '#ec4899',
      button: '#f43f5e'
    }
  };

  const groupMembers = [
    { name: 'Christine Jean Pagunsan', color: '#3b82f6' },
    { name: 'Darah Via Moscoso', color: '#a855f7' },
    { name: 'Gerianne Gayle Burgos', color: '#ec4899' }
  ];

  const rooms = {
    family: {
      title: 'Family Home',
      description: 'Where you grew up, with parents and siblings',
      data: {
        'Christine Jean Pagunsan': {
          image: tineFamily, 
          performance: 'Obedient, Understanding, and Independent',
          reality: 'Anxious, Stubborn, and Impatient',
          dialogue: '"Yes, I’ve got this, and I will help you find a way to fix that problem as well."',
          bodyLanguage: 'Sits upright, maintains respectful posture, and uses slow movements and gestures.',
          values: ['Family duty', 'Respect', 'Achievement'],
          comfort: '80%',
          concepts: ['Socialization agents', 'Looking glass self', 'Role expectations'],
          memory: 'A chaotic and loud home, steeped in collective memories of food and dancing.'
        },
        'Darah Via Moscoso': {
          image: darahFamily, 
          performance: 'Quietly independent, values respect and kindness in interactions',
          reality: 'Feels disconnected and nostalgic for the family warmth once shared when the father was alive',
          dialogue: '“It’s okay, I can handle things on my own.”',
          bodyLanguage: 'Composed, reserved posture; prefers staying in their own space',
          values: ['Respect', 'Independence', 'Kindness'],
          comfort: '50%',
          concepts: ['Independent Self-Construal', 'Interdependent self-construal (remnants of Filipino values)', 'Collective memory'],
          memory: 'Dining table that once symbolized unity but now reminds of loss and change'
        },
        'Gerianne Gayle Burgos': {
          image: gerFamily,
          performance: 'Talkative, Nurturing, and Obedient',
          reality: 'Indecisive, Independent, and Emotionally Reserved',
          dialogue: '“I’ll help out if you need me.”',
          bodyLanguage: 'Expressive when engaged in conversation, often smiling or moving around; quiet and withdrawn only during conflict or when retreating to quiet spaces for rest.',
          values: ['Critical thinking', 'Authenticity', 'Challenge'],
          comfort: '85%',
          concepts: ['Reflexivity (questioning)', 'Agency (resistance)', 'Power dynamics'],
          memory: 'A loving home where members are often physically apart but always show up for one another when needed, marked by gentle care, and calm understanding.'
        }
      }
    },
    school: {
      title: 'Classroom',
      description: 'Academic environment with teachers and peers',
      data: {
        'Christine Jean Pagunsan': {
          image: tineSchool,
          performance: 'Engaged, Friendly, and Lively',
          reality: 'Enjoys tasks involving public speaking/presentation; dislikes technical subjects ',
          dialogue: '"I can lead the presentation/discussion for the group."',
          bodyLanguage: 'Open and expansive gestures, maintains a confident posture, and eye contact with the teacher and classmates',
          values: ['Achievement', 'Recognition', 'Excellence'],
          comfort: '60%',
          concepts: ['Front/backstage (Goffman)', 'Social self (Cooley)', 'Reflexivity'],
          memory: 'A space associated with the thrill of public performance, yet the specific course activity generates significant stress.'
        },
        'Darah Via Moscoso': {
          image: darahSchool,
          performance: 'Social connector, helps struggling peers',
          reality: 'Sometimes hides own struggles to help others',
          dialogue: '"Tudluan taka?"',
          bodyLanguage: 'Relaxed, approachable, turned toward peers',
          values: ['Cooperation', 'Helping', 'Social harmony'],
          comfort: '10%',
          concepts: ['Collective values', 'Mead\'s "me"', 'Embodied self'],
          memory: 'Group project that created lasting friendships'
        },
        'Gerianne Gayle Burgos': {
          image: gerSchool,
          performance: 'Quiet, Polite, and Selectively Active',
          reality: 'Engages deeply only in subjects or tasks she enjoys, such as reporting, public speaking, or designing; tends to lose focus or motivation with heavy paperwork or readings.',
          dialogue: '"I’ll do the creative or presentation part instead."',
          bodyLanguage: 'Usually calm and composed, but becomes expressive and animated when discussing or performing something she likes.',
          values: ['Authenticity', 'Depth', 'True connection'],
          comfort: '60%',
          concepts: ['Agency (chosen friend group)', 'Mead\'s "I"', 'Reflexivity'],
          memory: 'A space associated with effortful composure, bursts of enthusiasm during creative moments, and fatigue from routine academic demands.'
        }
      }
    },
    social: {
      title: 'Social Gathering',
      description: 'With friends in casual social setting',
      data: {
        'Christine Jean Pagunsan': {
          image: tineFriends,
          performance: 'Sociable, Energetic, and Witty',
          reality: 'Values intimate company of close friends; prioritizes solitude and self-reflection (self-dates).',
          dialogue: '"We should do something fun',
          bodyLanguage: 'Confident stride; projects positive energy and a bright, consistent smile.',
          values: ['Authenticity', 'Fun', 'Belonging'],
          comfort: '90%',
          concepts: ['Backstage self', 'Looking glass self', 'Agency (choice of friends)'],
          memory: 'Places of active social networking (e.g., organizational events, sports, hosting); she views it as sites for gaining new perspectives and skills.'
        },
        'Darah Via Moscoso': {
          image: darahFriends,
          performance: 'Lively, talkative, and expressive',
          reality: 'Worries about saying the wrong thing and being misunderstood, but values genuine connection',
          dialogue: '“Dai dai dai may sturya ko bala”',
          bodyLanguage: 'Animated gestures, open face, leans in when listening',
          values: ['Authenticity', 'Connection', 'Fun', 'Understanding'],
          comfort: '100%',
          concepts: ['Interdependent Self-Construal', 'Reflexivity', 'Social Identity Theory'],
          memory: 'Moments of laughter while preparing together for a beach trip'
        },
        'Gerianne Gayle Burgos': {
          image: gerFriends,
          performance: 'Energetic, Animated, and Approachable',
          reality: 'EEmpathetic and reflective; enjoys deep connections but values time alone to recharge.',
          dialogue: '"Let’s go! I’m down for anything."',
          bodyLanguage: ' Expressive hands, lively tone, and bright facial expressions; projects energy and attentiveness toward others.',
          values: ['Authenticity', 'Depth', 'True connection'],
          comfort: '95%',
          concepts: ['Agency (chosen friend group)', 'Mead\'s "I"', 'Reflexivity'],
          memory: 'Gatherings filled with laughter, storytelling, and companionship; she associates these with connection, understanding, and shared experiences.'
        }
      }
    }
  };

  const RoomCard = ({ roomKey, room, colors }) => (
    <button
      onClick={() => {
        setCurrentRoom(roomKey);
        setShowReflection(false);
      }}
      style={{
        ...styles.card,
        backgroundColor: colors.bg,
        color: colors.text
      }}
      onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)'}
      onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
    >
      <div style={{ fontSize: '28px', marginBottom: '8px' }}>📍</div>
      <div style={{ ...styles.heading3, color: colors.text }}>{room.title}</div>
      <p style={{ fontSize: '14px', opacity: 0.8 }}>{room.description}</p>
    </button>
  );

  const PersonTab = ({ person, index, isActive }) => (
    <button
      onClick={() => setCurrentPerson(index)}
      style={{
        ...styles.tab,
        backgroundColor: isActive ? person.color : '#e5e7eb',
        color: isActive ? 'white' : '#374151'
      }}
    >
      {person.name}
    </button>
  );

  const ConceptBadge = ({ concept }) => (
    <span
      style={{
        ...styles.badge,
        backgroundColor: '#fef08a',
        color: '#78350f'
      }}
    >
      {concept}
    </span>
  );

  const ProgressBar = ({ value }) => {
    const numValue = parseInt(value);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          flex: 1,
          backgroundColor: '#e5e7eb',
          borderRadius: '9999px',
          height: '12px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: value,
            height: '100%',
            backgroundColor: '#10b981',
            transition: 'width 0.3s'
          }} />
        </div>
        <span style={{ fontWeight: 'bold', color: '#059669' }}>{value}</span>
      </div>
    );
  };

  // HOME PAGE
  if (!currentRoom) {
    const colors = roomColors.family;
    return (
      <div style={{ ...styles.container, backgroundColor: '#f0f4ff' }}>
        <div style={styles.maxWidth}>
          <div style={{ marginBottom: '48px' }}>
            <h1 style={styles.heading1}>The Multiple Selves</h1>
            <p style={{ fontSize: '20px', color: '#374151', marginBottom: '8px' }}>
              An Interactive Exploration of Identity in Different Contexts
            </p>
            <p style={{ color: '#4b5563' }}>
              Based on Goffman, Mead, Cooley, and concepts from SAS 1
            </p>
          </div>

          <div style={{
            marginBottom: '32px',
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderLeft: '4px solid #4f46e5'
          }}>
            <h2 style={{ ...styles.heading3, marginBottom: '8px' }}>How to Use This</h2>
            <p style={{ color: '#374151' }}>
              Select a room below to explore how personality, behavior, and self-presentation shift based on social context. 
              Then compare how different group members experience the same environment.
            </p>
          </div>

          <div style={styles.gridCards}>
            {Object.entries(rooms).map(([key, room]) => (
              <RoomCard key={key} roomKey={key} room={room} colors={roomColors[key]} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ROOM PAGE
  const room = rooms[currentRoom];
  const roomColors_current = roomColors[currentRoom];
  const roomData = room.data[groupMembers[currentPerson].name];

  return (
    <div style={{ ...styles.container, backgroundColor: roomColors_current.bg }}>
      <div style={styles.maxWidth}>


        <button
          onClick={() => setCurrentRoom(null)}
          style={styles.backButton}
        >
          ← Back to Rooms
        </button>

        <h1 style={{ ...styles.heading1, color: roomColors_current.text }}>
          {room.title}
        </h1>
        <p style={{ fontSize: '16px', color: roomColors_current.text, opacity: 0.75, marginBottom: '32px' }}>
          {room.description}
        </p>

        {/* PERSON TABS */}
        <div style={styles.tabsContainer}>
          {groupMembers.map((person, index) => (
            <PersonTab 
              key={index} 
              person={person} 
              index={index} 
              isActive={currentPerson === index}
            />
          ))}
        </div>
{/* IMAGE CONTAINER */}
{roomData.image && (
  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
    <img
      src={roomData.image} 
      alt={`${groupMembers[currentPerson].name} - ${room.title}`}
      style={{
        width: '1200px',
        height: '450px',
        objectFit: 'cover',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
    />
  </div>
)}

        {/* CONTENT */}
        <div style={styles.contentArea}>
          {!showReflection ? (
            <div>
              {/* PERFORMANCE VS REALITY */}
              <div style={styles.twoColumn}>
                <div style={{
                  ...styles.box,
                  borderLeftColor: '#22c55e',
                  backgroundColor: '#f0fdf4'
                }}>
                  <h3 style={{ ...styles.heading3, color: '#15803d' }}>
                    Public Performance
                  </h3>
                  <p style={{ color: '#374151' }}>{roomData.performance}</p>
                </div>
                <div style={{
                  ...styles.box,
                  borderLeftColor: '#ef4444',
                  backgroundColor: '#fef2f2'
                }}>
                  <h3 style={{ ...styles.heading3, color: '#991b1b' }}>
                    Private Reality
                  </h3>
                  <p style={{ color: '#374151' }}>{roomData.reality}</p>
                </div>
              </div>

              {/* DIALOGUE & BODY LANGUAGE */}
              <div style={styles.twoColumn}>
                <div style={{
                  ...styles.box,
                  borderLeftColor: '#3b82f6',
                  backgroundColor: '#eff6ff'
                }}>
                  <h3 style={{ ...styles.heading3, color: '#1e40af' }}>What They Say</h3>
                  <p style={{ fontStyle: 'italic', color: '#1e40af' }}>{roomData.dialogue}</p>
                </div>
                <div style={{
                  ...styles.box,
                  borderLeftColor: '#a855f7',
                  backgroundColor: '#faf5ff'
                }}>
                  <h3 style={{ ...styles.heading3, color: '#6b21a8' }}>Body Language</h3>
                  <p style={{ color: '#374151' }}>{roomData.bodyLanguage}</p>
                </div>
              </div>

              {/* VALUES & COMFORT */}
              <div style={styles.twoColumn}>
                <div style={{
                  ...styles.box,
                  borderLeftColor: '#f59e0b',
                  backgroundColor: '#fffbeb'
                }}>
                  <h3 style={{ ...styles.heading3, color: '#b45309' }}>Values in This Space</h3>
                  <div style={{ marginTop: '12px' }}>
                    {roomData.values.map((value, i) => (
                      <span
                        key={i}
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#fcd34d',
                          color: '#92400e',
                          padding: '6px 12px',
                          borderRadius: '9999px',
                          fontSize: '14px',
                          fontWeight: '500',
                          marginRight: '8px',
                          marginBottom: '8px'
                        }}
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{
                  ...styles.box,
                  borderLeftColor: roomColors_current.accent,
                  backgroundColor: roomColors_current.bg
                }}>
                  <h3 style={{ ...styles.heading3, color: roomColors_current.text }}>
                    Comfort Level
                  </h3>
                  <div style={{ marginTop: '12px' }}>
                    <ProgressBar value={roomData.comfort} />
                  </div>
                </div>
              </div>

              {/* MEMORY */}
              <div style={{
                ...styles.box,
                borderLeftColor: '#6366f1',
                backgroundColor: '#eef2ff',
                marginBottom: '24px'
              }}>
                <h3 style={{ ...styles.heading3, color: '#3730a3' }}>
                  Sense of Place & Collective Memory
                </h3>
                <p style={{ color: '#374151' }}>{roomData.memory}</p>
              </div>

              {/* CONCEPTS */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={styles.heading3}>Theoretical Concepts at Play</h3>
                <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap' }}>
                  {roomData.concepts.map((concept, i) => (
                    <ConceptBadge key={i} concept={concept} />
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowReflection(true)}
                style={{
                  ...styles.button,
                  width: '100%',
                  backgroundColor: groupMembers[currentPerson].color,
                  color: 'white',
                  fontSize: '16px'
                }}
              >
                See Reflection Essay
              </button>
            </div>
          ) : (
            <div>
              <h2 style={styles.heading2}>Reflection & Analysis</h2>

              <div style={{
                ...styles.box,
                borderLeftColor: '#3b82f6',
                backgroundColor: '#eff6ff',
                marginBottom: '20px'
              }}>
                <h3 style={{ color: '#1e40af' }}>Mead's "I" and "Me"</h3>
                <p style={{ color: '#374151', marginTop: '8px' }}>
 Our website shows how people balance who they really are with how they think they should act. The public performance part represents the “Me,” or the side that follows social expectations, while the private reality shows the “I,” or the more natural and personal self. Together, they show how identity shifts between being true to oneself and fitting into different situations.
                </p>
              </div>

              <div style={{
                ...styles.box,
                borderLeftColor: '#22c55e',
                backgroundColor: '#f0fdf4',
                marginBottom: '20px'
              }}>
                <h3 style={{ color: '#15803d' }}>Cooley's Looking Glass Self</h3>
                <p style={{ color: '#374151', marginTop: '8px' }}>
The things said, the body language, and the comfort levels in the descriptions show how people see themselves through others’ eyes. Each action and response reflects how they think others view them, shaping their confidence and behavior in different spaces.
                </p>
              </div>

              <div style={{
                ...styles.box,
                borderLeftColor: '#a855f7',
                backgroundColor: '#faf5ff',
                marginBottom: '20px'
              }}>
                <h3 style={{ color: '#6b21a8' }}>Reflexivity and Agency</h3>
                <p style={{ color: '#374151', marginTop: '8px' }}>
 The notes show that people don’t just act automatically, they think about their roles and make choices about how to behave. Their comfort levels and reactions show moments of self-awareness, where they decide whether to speak up, step back, or adjust depending on how they feel in that situation.
                </p>
              </div>

              <div style={{
                ...styles.box,
                borderLeftColor: '#f59e0b',
                backgroundColor: '#fffbeb'
              }}>
                <h3 style={{ color: '#b45309' }}>Sense of Place & Collective Memory</h3>
                <p style={{ color: '#374151', marginTop: '8px' }}>
 Each environment, the home, classroom, and social gatherings, brings out different sides of a person. These spaces hold memories and emotions that affect how people act and feel. The collage and notes together show how familiar places and shared experiences shape the way people express themselves and connect with others.
                </p>
              </div>

              <button
                onClick={() => setShowReflection(false)}
                style={{
                  ...styles.button,
                  width: '100%',
                  backgroundColor: groupMembers[currentPerson].color,
                  color: 'white',
                  fontSize: '16px',
                  marginTop: '24px'
                }}
              >
                Back to Data
              </button>
            </div>
          )}
        </div>

        {/* NAVIGATION */}
        <div style={{
          marginTop: '32px',
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setCurrentPerson((prev) => (prev === 0 ? groupMembers.length - 1 : prev - 1))}
            style={{
              ...styles.button,
              backgroundColor: 'white',
              color: '#374151',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Previous Person
          </button>
          <button
            onClick={() => setCurrentPerson((prev) => (prev === groupMembers.length - 1 ? 0 : prev + 1))}
            style={{
              ...styles.button,
              backgroundColor: 'white',
              color: '#374151',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Next Person
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdentityRoomsApp;