export default /* glsl */`
uniform vec2 u_resolution;
uniform float u_time;

vec2 randomGradient(vec2 p) {
	p = p + 0.1;
	float x = dot(p, vec2(123.4, 234.5));
	float y = dot(p, vec2(234.5, 345.6));
	vec2 gradient = vec2(x, y);
	gradient = sin(gradient);
	gradient = gradient * 321.1234;

	gradient = sin(gradient + u_time);
	return gradient;
}

vec2 cubic(vec2 p) {
	return p * p * (3.0 - p * 2.0);
}
  
vec2 quintic(vec2 p) {
	return p * p * p * (10.0 + p * (-15.0 + p * 6.0));
}

void main() {
	vec2 uv = gl_FragCoord.xy / u_resolution;

	vec3 red = vec3(1.0, 0.0, 0.0);
	vec3 white = vec3(1.0, 1.0, 1.0);
	vec3 blue = vec3(0.0, 0.0, 1.0);
	vec3 color = white;

	// create grid of cells
	uv = uv * 1.5;
	vec2 gridId = floor(uv);
	vec2 gridUv = fract(uv);
	// color = vec3(gridId, 0.0);
	color = vec3(gridUv, 0.0);

	// find corners
	vec2 bottomLeft = gridId;
	vec2 bottomRight = gridId + vec2(1.0, 0.0);
	vec2 topLeft = gridId + vec2(0.0, 1.0);
	vec2 topRight = gridId + vec2(1.0, 1.0);

	// generate gradients
	vec2 gradBl = randomGradient(bottomLeft);
	vec2 gradBr = randomGradient(bottomRight);
	vec2 gradTl = randomGradient(topLeft);
	vec2 gradTr = randomGradient(topRight);

	// get vectors from corners to point
	vec2 d2bl = gridUv;
	vec2 d2br = gridUv - vec2(1.0, 0.0);
	vec2 d2tl = gridUv - vec2(0.0, 1.0);
	vec2 d2tr = gridUv - vec2(1.0, 1.0);

	// dot products of gradients and vectors
	float dotBl = dot(gradBl, d2bl);
	float dotBr = dot(gradBr, d2br);
	float dotTl = dot(gradTl, d2tl);
	float dotTr = dot(gradTr, d2tr);

	// smooth
	gridUv = smoothstep(0.0, 1.0, gridUv);
	// gridUv = cubic(gridUv);

	// interpolate along x
	float b = mix(dotBl, dotBr, gridUv.x);
	float t = mix(dotTl, dotTr, gridUv.x);
	float perlin = mix(b, t, gridUv.y) + 0.1;

	// threshold
	if (perlin < 0.25) {
		color = vec3(1.0);
		color = vec3(0.9647058823529412, 0.9686274509803922, 1);
	} 
	else {
		// color = vec3(0.90196078431);
		// color = vec3(0.6823529411764706, 0.7215686274509804, 0.996078431372549);
		color = vec3(0.8549019607843137, 0.8705882352941177, 1);
	}
	// color = vec3(perlin);

	gl_FragColor = vec4(color, 1.0);
}
`;
 