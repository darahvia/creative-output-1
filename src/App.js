import React, { useState } from 'react';
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
    workplace: {
      bg: '#f1f5f9',
      text: '#0f172a',
      accent: '#64748b',
      button: '#475569'
    },
    social: {
      bg: '#ffe4e6',
      text: '#831843',
      accent: '#ec4899',
      button: '#f43f5e'
    }
  };

  const groupMembers = [
    { name: 'Christine Pagunsan', color: '#3b82f6' },
    { name: 'Person B', color: '#a855f7' },
    { name: 'Person C', color: '#ec4899' }
  ];

  const rooms = {
    family: {
      title: 'Family Home',
      description: 'Where you grew up, with parents and siblings',
      data: {
        'Christine Pagunsan': {
          performance: 'Obedient, respectful, seeks approval',
          reality: 'Feels pressure to meet expectations, sometimes resentful',
          dialogue: '"Yes, Mom. I finished my homework."',
          bodyLanguage: 'Sits upright, makes eye contact with parents',
          values: ['Family duty', 'Respect', 'Achievement'],
          comfort: '70%',
          concepts: ['Socialization agents', 'Looking glass self', 'Role expectations'],
          memory: 'Kitchen table where family meals happen'
        },
        'Person B': {
          performance: 'Peacemaker, mediates between siblings',
          reality: 'Exhausted from managing family dynamics',
          dialogue: '"Let\'s all just calm down and talk about this."',
          bodyLanguage: 'Open posture, constantly adjusting to others',
          values: ['Harmony', 'Connection', 'Understanding'],
          comfort: '60%',
          concepts: ['Interdependent self-construal', 'Reflexivity', 'Agency'],
          memory: 'Living room where conflicts are resolved'
        },
        'Person C': {
          performance: 'Independent, pushes boundaries',
          reality: 'Navigating tension between autonomy and belonging',
          dialogue: '"I want to do this my own way."',
          bodyLanguage: 'Slightly withdrawn, defensive posture',
          values: ['Independence', 'Self-determination', 'Authenticity'],
          comfort: '50%',
          concepts: ['Negotiation with culture', 'Agency and resistance', 'Embodied self'],
          memory: 'Bedroom as refuge space'
        }
      }
    },
    school: {
      title: 'Classroom',
      description: 'Academic environment with teachers and peers',
      data: {
        'Christine Pagunsan': {
          performance: 'Model student, participates actively',
          reality: 'Performs for grades, not genuine interest',
          dialogue: '"Can I answer, teacher?"',
          bodyLanguage: 'Hand raised, leaning forward',
          values: ['Achievement', 'Recognition', 'Excellence'],
          comfort: '75%',
          concepts: ['Front/backstage (Goffman)', 'Social self (Cooley)', 'Reflexivity'],
          memory: 'Winning an award in front of the class'
        },
        'Person B': {
          performance: 'Social connector, helps struggling peers',
          reality: 'Sometimes hides own struggles to help others',
          dialogue: '"Do you want me to explain this?"',
          bodyLanguage: 'Relaxed, approachable, turned toward peers',
          values: ['Cooperation', 'Helping', 'Social harmony'],
          comfort: '80%',
          concepts: ['Collective values', 'Mead\'s "me"', 'Embodied self'],
          memory: 'Group project that created lasting friendships'
        },
        'Person C': {
          performance: 'Quiet observer, cynical about system',
          reality: 'Questions authority and conventional thinking',
          dialogue: '"Why do we need to memorize this?"',
          bodyLanguage: 'Slouched, back of classroom',
          values: ['Critical thinking', 'Authenticity', 'Challenge'],
          comfort: '45%',
          concepts: ['Reflexivity (questioning)', 'Agency (resistance)', 'Power dynamics'],
          memory: 'Being labeled "difficult" by a teacher'
        }
      }
    },
    workplace: {
      title: 'Workplace',
      description: 'Professional environment with colleagues',
      data: {
        'Christine Pagunsan': {
          performance: 'Ambitious professional, strives for promotion',
          reality: 'Fears failure, overworks to prove worth',
          dialogue: '"I\'ll take on that extra project."',
          bodyLanguage: 'Formal attire, composed demeanor',
          values: ['Ambition', 'Professionalism', 'Success'],
          comfort: '65%',
          concepts: ['Corporate socialization', 'Embodied self', 'I vs. me'],
          memory: 'First day anxiety in a new office'
        },
        'Person B': {
          performance: 'Reliable team player, collaborates easily',
          reality: 'Sometimes sacrifices own ideas for consensus',
          dialogue: '"Let\'s work together. What do you think?"',
          bodyLanguage: 'Engaged in conversations, shares space',
          values: ['Teamwork', 'Reliability', 'Connection'],
          comfort: '78%',
          concepts: ['Interdependent self', 'Code-switching', 'Reflexivity'],
          memory: 'Team-building event where felt belonged'
        },
        'Person C': {
          performance: 'Competent but detached, follows own path',
          reality: 'Struggles with conformity to workplace culture',
          dialogue: '"I did it differently, but results are same."',
          bodyLanguage: 'Professional but minimalist',
          values: ['Competence', 'Autonomy', 'Authenticity'],
          comfort: '55%',
          concepts: ['Negotiation with institutions', 'Agency', 'Embodied resistance'],
          memory: 'Clash with manager over "the right way"'
        }
      }
    },
    social: {
      title: 'Social Gathering',
      description: 'With friends in casual social setting',
      data: {
        'Christine Pagunsan': {
          performance: 'Funny, relaxed, "real version" of self',
          reality: 'Still somewhat curating image',
          dialogue: '"That\'s so me!"',
          bodyLanguage: 'Laughing, animated, comfortable gestures',
          values: ['Authenticity', 'Fun', 'Belonging'],
          comfort: '85%',
          concepts: ['Backstage self', 'Looking glass self', 'Agency (choice of friends)'],
          memory: 'Inside jokes that define the friend group'
        },
        'Person B': {
          performance: 'Center of social activity, entertainer',
          reality: 'Uses humor to avoid vulnerability',
          dialogue: '"Let me tell you what happened..."',
          bodyLanguage: 'Central position, expressive, energetic',
          values: ['Humor', 'Connection', 'Being needed'],
          comfort: '82%',
          concepts: ['Social self emerges', 'Reflexivity', 'Collective memory'],
          memory: 'Becoming known for making others laugh'
        },
        'Person C': {
          performance: 'Authentic self, fewer masks',
          reality: 'Selective about who sees this side',
          dialogue: '"I actually care deeply about this."',
          bodyLanguage: 'Relaxed but intentional, deeper conversations',
          values: ['Authenticity', 'Depth', 'True connection'],
          comfort: '88%',
          concepts: ['Agency (chosen friend group)', 'Mead\'s "I"', 'Reflexivity'],
          memory: 'Late-night conversations where truly revealed'
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
                borderLeftColor: '#6366f1',
                backgroundColor: '#eef2ff',
                marginBottom: '20px',
                marginTop: '20px'
              }}>
                <h3 style={{ color: '#3730a3' }}>Goffman's Front/Backstage Performance</h3>
                <p style={{ color: '#374151', marginTop: '8px' }}>
                  The gap between "public performance" and "private reality" demonstrates Erving Goffman's concept 
                  of front-stage and back-stage selves. In the {room.title.toLowerCase()}, {groupMembers[currentPerson].name.toLowerCase()} 
                  manages their impression by controlling information revealed to others.
                </p>
              </div>

              <div style={{
                ...styles.box,
                borderLeftColor: '#3b82f6',
                backgroundColor: '#eff6ff',
                marginBottom: '20px'
              }}>
                <h3 style={{ color: '#1e40af' }}>Mead's "I" and "Me"</h3>
                <p style={{ color: '#374151', marginTop: '8px' }}>
                  The "I" is the spontaneous, creative self. The "me" is how they perceive others perceive them. 
                  The discomfort level reflects tension between these two aspects in this particular social context.
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
                  Charles Horton Cooley argued the self emerges through imagining how we appear to others. 
                  The values and behaviors prioritized in {room.title.toLowerCase()} reflect internalization of this group's "gaze."
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
                  While socialization processes shape expected behavior, {groupMembers[currentPerson].name.toLowerCase()} 
                  retains reflexivity—the ability to think about themselves as an object. Comfort level suggests 
                  where agency is experienced or constrained by social structures.
                </p>
              </div>

              <div style={{
                ...styles.box,
                borderLeftColor: '#f59e0b',
                backgroundColor: '#fffbeb'
              }}>
                <h3 style={{ color: '#b45309' }}>Sense of Place & Collective Memory</h3>
                <p style={{ color: '#374151', marginTop: '8px' }}>
                  Following Lefebvre and Halbwachs, place is not neutral—it's socially produced and embedded with 
                  collective memory. This becomes part of identity, showing how selfhood is situated in specific times and places.
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