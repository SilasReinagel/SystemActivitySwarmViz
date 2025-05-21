# System Activity Swarm Visualization (SASV) PRD

## 1. Product Overview

SASV is a web-based tool for visualizing work activity across business systems. It captures interactions between people, AI agents, information systems, and artifacts to provide insights into workflow patterns and system dynamics.

## 2. User Personas

- **Business Analysts**: Studying process flows
- **System Architects**: Understanding integration points
- **Team Leads**: Monitoring work distribution

## 3. Data Model

```
Event {
  id: string
  timestamp: number
  sourceEntityId: string
  targetEntityId: string
  actionType: string
  artifactId?: string
  domain?: string
  metadata?: object
}

Entity {
  id: string
  name: string
  type: "Person" | "AI" | "System"
  metadata?: object
}

Artifact {
  id: string
  name: string
  type: string
  createdAt: number
  lastInteractedAt: number
  creatorId: string
  metadata?: object
}

Domain {
  id: string
  name: string
  description?: string
}
```

## 4. Feature Details

### 4.1 Data Generation

- Simple synthetic data generator for testing
- Configurable entity count and event frequency
- Randomized but realistic event patterns
- Support for various system types and interactions

### 4.2 Data Import

- IndexedDB storage
- URL-based JSON import
- Real-time data streaming option
- Format validation and error handling

### 4.3 Activity Stream Visualization

- Time-based particle visualization
- Entity clustering by type and domain
- Artifact lifecycle representation (fade in/out)
- Time controls (play, pause, speed, seek)
- Filtering options by entity, domain, or action type
- Lightweight rendering using Canvas/WebGL

## 5. Technical Considerations

- Use Canvas/WebGL for performance with many particles
- Optimize IndexedDB queries with appropriate indices
- Implement time-window buffering for smooth playback
- Consider WebWorkers for data processing

## 6. MVP Scope

- Core data model implementation
- Basic synthetic data generator
- IndexedDB storage
- Simple URL-based import
- Canvas-based visualization with basic controls
- Filtering by entity type
- Timeline controls

## 7. Future Enhancements

- Advanced filtering and search
- Saved views
- Network analysis metrics
- Pattern detection
- Real-time data connectors 