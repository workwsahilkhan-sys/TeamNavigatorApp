# Team Navigator App

A mobile app for navigation, team coordination, and mission planning with offline capabilities for hikers, adventurers, rescue teams, and defense personnel.

## Features

- Topographic/terrain map with offline support
- Real-time location sharing
- Teammate management with callsigns and groups
- Waypoint setting and sharing
- Chat functionality
- Multiple connectivity options: Internet, Bluetooth/WiFi, Radio/LoRa mesh
- Compass, coordinates, heading, elevation
- Full offline mode

## Setup

1. Install dependencies: `npm install`
2. Start the app: `npm start`

## Technologies

- React Native with Expo
- React Native Maps (Mapbox for offline terrain)
- Expo Location and Sensors
- Socket.io for internet chat
- Bluetooth libraries for offline connectivity

## Hardware Integration

For radio/LoRa support, connect compatible devices via Bluetooth. Research ongoing for specific protocols.

## Usage

Run on device or emulator. Grant location permissions.

## Troubleshooting

- Ensure location permissions are granted.
- For offline maps, download tiles in advance.
- Hardware devices need pairing.
