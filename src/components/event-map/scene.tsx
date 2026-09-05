import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import type { EventMapSector } from "./event-map.types";

type EventMapSceneProps = {
  sectors: EventMapSector[];
  selectedId: string;
  onSelect: (sector: EventMapSector) => void;
  resetToken: number;
  zoom: number;
};

type EventMapCanvasProps = Omit<EventMapSceneProps, "sectors"> & {
  sectors: EventMapSector[];
};

type OrbitController = {
  target: { set: (x: number, y: number, z: number) => void };
  update: () => void;
};

const CAMERA_POSITION: [number, number, number] = [12, 13, 14];

const MapFloor = () => (
  <>
    <mesh position={[0, -0.16, 0]}>
      <boxGeometry args={[15.5, 0.3, 9.5]} />
      <meshStandardMaterial color="#121212" roughness={0.88} metalness={0.12} />
    </mesh>
    <gridHelper args={[15, 15, "#4a4a4a", "#27212f"]} position={[0, 0.01, 0]} />
    <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[15.2, 9.2]} />
      <meshBasicMaterial color="#18131f" transparent opacity={0.72} />
    </mesh>
  </>
);

const Sector = ({
  sector,
  selected,
  onSelect,
}: {
  sector: EventMapSector;
  selected: boolean;
  onSelect: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const [x, , z] = sector.position;
  const [width, height, depth] = sector.size;
  const active = selected || hovered;

  return (
    <group
      position={[x, 0, z]}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "";
      }}
    >
      <mesh position={[0, height / 2, 0]} scale={active ? 1.035 : 1}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial
          color={sector.color}
          emissive={sector.accent}
          emissiveIntensity={selected ? 0.34 : hovered ? 0.2 : 0.08}
          roughness={0.62}
          metalness={0.18}
        />
      </mesh>
      <mesh position={[0, height + 0.015, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[width * 0.86, depth * 0.86]} />
        <meshBasicMaterial color={sector.accent} transparent opacity={selected ? 0.2 : 0.08} />
      </mesh>
      <Html center position={[0, height + 0.38, 0]} distanceFactor={11} transform>
        <div
          className={`pointer-events-none w-36 select-none text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] transition-opacity ${active ? "opacity-100" : "opacity-85"}`}
        >
          {sector.shortName}
        </div>
      </Html>
      {selected && (
        <mesh position={[0, height + 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[Math.min(width, depth) * 0.42, Math.min(width, depth) * 0.47, 32]} />
          <meshBasicMaterial color={sector.accent} transparent opacity={0.9} />
        </mesh>
      )}
    </group>
  );
};

const CameraRig = ({ resetToken }: Pick<EventMapSceneProps, "resetToken">) => {
  const { camera, controls } = useThree();

  useEffect(() => {
    camera.position.set(CAMERA_POSITION[0], CAMERA_POSITION[1], CAMERA_POSITION[2]);
    camera.updateProjectionMatrix();
    const orbitControls = controls as unknown as OrbitController | undefined;
    orbitControls?.target.set(0, 0, 0);
    orbitControls?.update();
  }, [camera, controls, resetToken]);

  return null;
};

const EventMapCanvas = ({
  sectors,
  selectedId,
  onSelect,
  resetToken,
  zoom,
}: EventMapCanvasProps) => (
  <Canvas
    orthographic
    dpr={[1, 1.5]}
    camera={{ position: CAMERA_POSITION, zoom, near: 0.1, far: 100 }}
    gl={{ antialias: true, powerPreference: "high-performance" }}
  >
    <color attach="background" args={["#0f0c14"]} />
    <ambientLight intensity={1.5} />
    <directionalLight
      position={[4, 10, 6]}
      intensity={3.5}
      color="#ffffff"
    />
    <pointLight position={[-6, 4, -3]} intensity={18} distance={16} color="#791ac7" />
    <pointLight position={[6, 3, 4]} intensity={14} distance={14} color="#00c2cb" />
    <MapFloor />
    {sectors.map((sector) => (
      <Sector
        key={sector.id}
        sector={sector}
        selected={sector.id === selectedId}
        onSelect={() => onSelect(sector)}
      />
    ))}
    <CameraRig resetToken={resetToken} />
    <OrbitControls
      makeDefault
      enableDamping
      dampingFactor={0.08}
      minPolarAngle={0.72}
      maxPolarAngle={1.32}
      minZoom={25}
      maxZoom={48}
      enablePan={false}
    />
  </Canvas>
);

export const EventMapScene = (props: EventMapSceneProps) => (
  <div className="relative h-108 w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0f0c14] shadow-2xl shadow-brand-violet/15 sm:h-136 lg:h-156">
    <EventMapCanvas {...props} />
    <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60 sm:inset-x-6 sm:text-xs">
      <span>Plano conceptual ExpoJuy 2026</span>
      <span className="hidden sm:inline">Arrastrá para explorar</span>
    </div>
  </div>
);
