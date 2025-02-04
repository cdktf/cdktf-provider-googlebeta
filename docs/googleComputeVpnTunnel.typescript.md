# `googleComputeVpnTunnel` Submodule <a name="`googleComputeVpnTunnel` Submodule" id="@cdktf/provider-google-beta.googleComputeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeVpnTunnel <a name="GoogleComputeVpnTunnel" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktf/provider-google-beta'

new googleComputeVpnTunnel.GoogleComputeVpnTunnel(scope: Construct, id: string, config: GoogleComputeVpnTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig">GoogleComputeVpnTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig">GoogleComputeVpnTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetIkeVersion">resetIkeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLocalTrafficSelector">resetLocalTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGateway">resetPeerExternalGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGatewayInterface">resetPeerExternalGatewayInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerGcpGateway">resetPeerGcpGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerIp">resetPeerIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRemoteTrafficSelector">resetRemoteTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTargetVpnGateway">resetTargetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGateway">resetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGatewayInterface">resetVpnGatewayInterface</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeVpnTunnelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIkeVersion` <a name="resetIkeVersion" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetIkeVersion"></a>

```typescript
public resetIkeVersion(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocalTrafficSelector` <a name="resetLocalTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLocalTrafficSelector"></a>

```typescript
public resetLocalTrafficSelector(): void
```

##### `resetPeerExternalGateway` <a name="resetPeerExternalGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGateway"></a>

```typescript
public resetPeerExternalGateway(): void
```

##### `resetPeerExternalGatewayInterface` <a name="resetPeerExternalGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```typescript
public resetPeerExternalGatewayInterface(): void
```

##### `resetPeerGcpGateway` <a name="resetPeerGcpGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerGcpGateway"></a>

```typescript
public resetPeerGcpGateway(): void
```

##### `resetPeerIp` <a name="resetPeerIp" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerIp"></a>

```typescript
public resetPeerIp(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRemoteTrafficSelector` <a name="resetRemoteTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```typescript
public resetRemoteTrafficSelector(): void
```

##### `resetRouter` <a name="resetRouter" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRouter"></a>

```typescript
public resetRouter(): void
```

##### `resetTargetVpnGateway` <a name="resetTargetVpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTargetVpnGateway"></a>

```typescript
public resetTargetVpnGateway(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpnGateway` <a name="resetVpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGateway"></a>

```typescript
public resetVpnGateway(): void
```

##### `resetVpnGatewayInterface` <a name="resetVpnGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGatewayInterface"></a>

```typescript
public resetVpnGatewayInterface(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeVpnTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktf/provider-google-beta'

googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktf/provider-google-beta'

googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktf/provider-google-beta'

googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktf/provider-google-beta'

googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeVpnTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeVpnTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeVpnTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeVpnTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.detailedStatus">detailedStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretHash">sharedSecretHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference">GoogleComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersionInput">ikeVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelectorInput">localTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInput">peerExternalGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">peerExternalGatewayInterfaceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGatewayInput">peerGcpGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIpInput">peerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelectorInput">remoteTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretInput">sharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGatewayInput">targetVpnGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInput">vpnGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterfaceInput">vpnGatewayInterfaceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersion">ikeVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelector">localTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGateway">peerExternalGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGateway">peerGcpGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIp">peerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGateway">targetVpnGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGateway">vpnGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `detailedStatus`<sup>Required</sup> <a name="detailedStatus" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.detailedStatus"></a>

```typescript
public readonly detailedStatus: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `sharedSecretHash`<sup>Required</sup> <a name="sharedSecretHash" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretHash"></a>

```typescript
public readonly sharedSecretHash: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeVpnTunnelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference">GoogleComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ikeVersionInput`<sup>Optional</sup> <a name="ikeVersionInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersionInput"></a>

```typescript
public readonly ikeVersionInput: number;
```

- *Type:* number

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `localTrafficSelectorInput`<sup>Optional</sup> <a name="localTrafficSelectorInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```typescript
public readonly localTrafficSelectorInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peerExternalGatewayInput`<sup>Optional</sup> <a name="peerExternalGatewayInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```typescript
public readonly peerExternalGatewayInput: string;
```

- *Type:* string

---

##### `peerExternalGatewayInterfaceInput`<sup>Optional</sup> <a name="peerExternalGatewayInterfaceInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```typescript
public readonly peerExternalGatewayInterfaceInput: number;
```

- *Type:* number

---

##### `peerGcpGatewayInput`<sup>Optional</sup> <a name="peerGcpGatewayInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```typescript
public readonly peerGcpGatewayInput: string;
```

- *Type:* string

---

##### `peerIpInput`<sup>Optional</sup> <a name="peerIpInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIpInput"></a>

```typescript
public readonly peerIpInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `remoteTrafficSelectorInput`<sup>Optional</sup> <a name="remoteTrafficSelectorInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```typescript
public readonly remoteTrafficSelectorInput: string[];
```

- *Type:* string[]

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `sharedSecretInput`<sup>Optional</sup> <a name="sharedSecretInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretInput"></a>

```typescript
public readonly sharedSecretInput: string;
```

- *Type:* string

---

##### `targetVpnGatewayInput`<sup>Optional</sup> <a name="targetVpnGatewayInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```typescript
public readonly targetVpnGatewayInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeVpnTunnelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

---

##### `vpnGatewayInput`<sup>Optional</sup> <a name="vpnGatewayInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInput"></a>

```typescript
public readonly vpnGatewayInput: string;
```

- *Type:* string

---

##### `vpnGatewayInterfaceInput`<sup>Optional</sup> <a name="vpnGatewayInterfaceInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```typescript
public readonly vpnGatewayInterfaceInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: number;
```

- *Type:* number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `localTrafficSelector`<sup>Required</sup> <a name="localTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelector"></a>

```typescript
public readonly localTrafficSelector: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerExternalGateway`<sup>Required</sup> <a name="peerExternalGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGateway"></a>

```typescript
public readonly peerExternalGateway: string;
```

- *Type:* string

---

##### `peerExternalGatewayInterface`<sup>Required</sup> <a name="peerExternalGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```typescript
public readonly peerExternalGatewayInterface: number;
```

- *Type:* number

---

##### `peerGcpGateway`<sup>Required</sup> <a name="peerGcpGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGateway"></a>

```typescript
public readonly peerGcpGateway: string;
```

- *Type:* string

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIp"></a>

```typescript
public readonly peerIp: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `remoteTrafficSelector`<sup>Required</sup> <a name="remoteTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelector"></a>

```typescript
public readonly remoteTrafficSelector: string[];
```

- *Type:* string[]

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

---

##### `targetVpnGateway`<sup>Required</sup> <a name="targetVpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGateway"></a>

```typescript
public readonly targetVpnGateway: string;
```

- *Type:* string

---

##### `vpnGateway`<sup>Required</sup> <a name="vpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: string;
```

- *Type:* string

---

##### `vpnGatewayInterface`<sup>Required</sup> <a name="vpnGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterface"></a>

```typescript
public readonly vpnGatewayInterface: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeVpnTunnelConfig <a name="GoogleComputeVpnTunnelConfig" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktf/provider-google-beta'

const googleComputeVpnTunnelConfig: googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.ikeVersion">ikeVersion</a></code> | <code>number</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.localTrafficSelector">localTrafficSelector</a></code> | <code>string[]</code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGateway">peerExternalGateway</a></code> | <code>string</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>number</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerGcpGateway">peerGcpGateway</a></code> | <code>string</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerIp">peerIp</a></code> | <code>string</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.region">region</a></code> | <code>string</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>string[]</code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.router">router</a></code> | <code>string</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.targetVpnGateway">targetVpnGateway</a></code> | <code>string</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGateway">vpnGateway</a></code> | <code>string</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>number</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#name GoogleComputeVpnTunnel#name}

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#shared_secret GoogleComputeVpnTunnel#shared_secret}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#description GoogleComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: number;
```

- *Type:* number

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#ike_version GoogleComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#labels GoogleComputeVpnTunnel#labels}

---

##### `localTrafficSelector`<sup>Optional</sup> <a name="localTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```typescript
public readonly localTrafficSelector: string[];
```

- *Type:* string[]

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#local_traffic_selector GoogleComputeVpnTunnel#local_traffic_selector}

---

##### `peerExternalGateway`<sup>Optional</sup> <a name="peerExternalGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```typescript
public readonly peerExternalGateway: string;
```

- *Type:* string

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway GoogleComputeVpnTunnel#peer_external_gateway}

---

##### `peerExternalGatewayInterface`<sup>Optional</sup> <a name="peerExternalGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```typescript
public readonly peerExternalGatewayInterface: number;
```

- *Type:* number

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway_interface GoogleComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peerGcpGateway`<sup>Optional</sup> <a name="peerGcpGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```typescript
public readonly peerGcpGateway: string;
```

- *Type:* string

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#peer_gcp_gateway GoogleComputeVpnTunnel#peer_gcp_gateway}

---

##### `peerIp`<sup>Optional</sup> <a name="peerIp" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerIp"></a>

```typescript
public readonly peerIp: string;
```

- *Type:* string

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#peer_ip GoogleComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#region GoogleComputeVpnTunnel#region}

---

##### `remoteTrafficSelector`<sup>Optional</sup> <a name="remoteTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```typescript
public readonly remoteTrafficSelector: string[];
```

- *Type:* string[]

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#remote_traffic_selector GoogleComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#router GoogleComputeVpnTunnel#router}

---

##### `targetVpnGateway`<sup>Optional</sup> <a name="targetVpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```typescript
public readonly targetVpnGateway: string;
```

- *Type:* string

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#target_vpn_gateway GoogleComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeVpnTunnelTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#timeouts GoogleComputeVpnTunnel#timeouts}

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: string;
```

- *Type:* string

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway GoogleComputeVpnTunnel#vpn_gateway}

---

##### `vpnGatewayInterface`<sup>Optional</sup> <a name="vpnGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```typescript
public readonly vpnGatewayInterface: number;
```

- *Type:* number

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway_interface GoogleComputeVpnTunnel#vpn_gateway_interface}

---

### GoogleComputeVpnTunnelTimeouts <a name="GoogleComputeVpnTunnelTimeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktf/provider-google-beta'

const googleComputeVpnTunnelTimeouts: googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#create GoogleComputeVpnTunnel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#delete GoogleComputeVpnTunnel#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#update GoogleComputeVpnTunnel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#create GoogleComputeVpnTunnel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#delete GoogleComputeVpnTunnel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_vpn_tunnel#update GoogleComputeVpnTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeVpnTunnelTimeoutsOutputReference <a name="GoogleComputeVpnTunnelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktf/provider-google-beta'

new googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeVpnTunnelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

---



