# `googleEdgecontainerCluster` Submodule <a name="`googleEdgecontainerCluster` Submodule" id="@cdktf/provider-google-beta.googleEdgecontainerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgecontainerCluster <a name="GoogleEdgecontainerCluster" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster google_edgecontainer_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerCluster(scope: Construct, id: string, config: GoogleEdgecontainerClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig">GoogleEdgecontainerClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig">GoogleEdgecontainerClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlane">putControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlaneEncryption">putControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putFleet">putFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking">putNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putSystemAddonsConfig">putSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlane">resetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlaneEncryption">resetControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetDefaultMaxPodsPerNode">resetDefaultMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools">resetExternalLoadBalancerIpv4AddressPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetReleaseChannel">resetReleaseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetSystemAddonsConfig">resetSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTargetVersion">resetTargetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putAuthorization"></a>

```typescript
public putAuthorization(value: GoogleEdgecontainerClusterAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

---

##### `putControlPlane` <a name="putControlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlane"></a>

```typescript
public putControlPlane(value: GoogleEdgecontainerClusterControlPlane): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

---

##### `putControlPlaneEncryption` <a name="putControlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlaneEncryption"></a>

```typescript
public putControlPlaneEncryption(value: GoogleEdgecontainerClusterControlPlaneEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlaneEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

---

##### `putFleet` <a name="putFleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putFleet"></a>

```typescript
public putFleet(value: GoogleEdgecontainerClusterFleet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putMaintenancePolicy"></a>

```typescript
public putMaintenancePolicy(value: GoogleEdgecontainerClusterMaintenancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

---

##### `putNetworking` <a name="putNetworking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking"></a>

```typescript
public putNetworking(value: GoogleEdgecontainerClusterNetworking): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

---

##### `putSystemAddonsConfig` <a name="putSystemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putSystemAddonsConfig"></a>

```typescript
public putSystemAddonsConfig(value: GoogleEdgecontainerClusterSystemAddonsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putSystemAddonsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleEdgecontainerClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>

---

##### `resetControlPlane` <a name="resetControlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlane"></a>

```typescript
public resetControlPlane(): void
```

##### `resetControlPlaneEncryption` <a name="resetControlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlaneEncryption"></a>

```typescript
public resetControlPlaneEncryption(): void
```

##### `resetDefaultMaxPodsPerNode` <a name="resetDefaultMaxPodsPerNode" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetDefaultMaxPodsPerNode"></a>

```typescript
public resetDefaultMaxPodsPerNode(): void
```

##### `resetExternalLoadBalancerIpv4AddressPools` <a name="resetExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools"></a>

```typescript
public resetExternalLoadBalancerIpv4AddressPools(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetMaintenancePolicy"></a>

```typescript
public resetMaintenancePolicy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReleaseChannel` <a name="resetReleaseChannel" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetReleaseChannel"></a>

```typescript
public resetReleaseChannel(): void
```

##### `resetSystemAddonsConfig` <a name="resetSystemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetSystemAddonsConfig"></a>

```typescript
public resetSystemAddonsConfig(): void
```

##### `resetTargetVersion` <a name="resetTargetVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTargetVersion"></a>

```typescript
public resetTargetVersion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEdgecontainerCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isConstruct"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

googleEdgecontainerCluster.GoogleEdgecontainerCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformElement"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformResource"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleEdgecontainerCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEdgecontainerCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEdgecontainerCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgecontainerCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference">GoogleEdgecontainerClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference">GoogleEdgecontainerClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryption">controlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference">GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneVersion">controlPlaneVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference">GoogleEdgecontainerClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenanceEvents">maintenanceEvents</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList">GoogleEdgecontainerClusterMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference">GoogleEdgecontainerClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference">GoogleEdgecontainerClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfig">systemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference">GoogleEdgecontainerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryptionInput">controlPlaneEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneInput">controlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNodeInput">defaultMaxPodsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput">externalLoadBalancerIpv4AddressPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleetInput">fleetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networkingInput">networkingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannelInput">releaseChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfigInput">systemAddonsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersionInput">targetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNode">defaultMaxPodsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools">externalLoadBalancerIpv4AddressPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannel">releaseChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorization"></a>

```typescript
public readonly authorization: GoogleEdgecontainerClusterAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference">GoogleEdgecontainerClusterAuthorizationOutputReference</a>

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlane"></a>

```typescript
public readonly controlPlane: GoogleEdgecontainerClusterControlPlaneOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference">GoogleEdgecontainerClusterControlPlaneOutputReference</a>

---

##### `controlPlaneEncryption`<sup>Required</sup> <a name="controlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryption"></a>

```typescript
public readonly controlPlaneEncryption: GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference">GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference</a>

---

##### `controlPlaneVersion`<sup>Required</sup> <a name="controlPlaneVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneVersion"></a>

```typescript
public readonly controlPlaneVersion: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleet"></a>

```typescript
public readonly fleet: GoogleEdgecontainerClusterFleetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference">GoogleEdgecontainerClusterFleetOutputReference</a>

---

##### `maintenanceEvents`<sup>Required</sup> <a name="maintenanceEvents" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenanceEvents"></a>

```typescript
public readonly maintenanceEvents: GoogleEdgecontainerClusterMaintenanceEventsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList">GoogleEdgecontainerClusterMaintenanceEventsList</a>

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: GoogleEdgecontainerClusterMaintenancePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference">GoogleEdgecontainerClusterMaintenancePolicyOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networking"></a>

```typescript
public readonly networking: GoogleEdgecontainerClusterNetworkingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference">GoogleEdgecontainerClusterNetworkingOutputReference</a>

---

##### `nodeVersion`<sup>Required</sup> <a name="nodeVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemAddonsConfig`<sup>Required</sup> <a name="systemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfig"></a>

```typescript
public readonly systemAddonsConfig: GoogleEdgecontainerClusterSystemAddonsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEdgecontainerClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference">GoogleEdgecontainerClusterTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: GoogleEdgecontainerClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

---

##### `controlPlaneEncryptionInput`<sup>Optional</sup> <a name="controlPlaneEncryptionInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryptionInput"></a>

```typescript
public readonly controlPlaneEncryptionInput: GoogleEdgecontainerClusterControlPlaneEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

---

##### `controlPlaneInput`<sup>Optional</sup> <a name="controlPlaneInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneInput"></a>

```typescript
public readonly controlPlaneInput: GoogleEdgecontainerClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

---

##### `defaultMaxPodsPerNodeInput`<sup>Optional</sup> <a name="defaultMaxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNodeInput"></a>

```typescript
public readonly defaultMaxPodsPerNodeInput: number;
```

- *Type:* number

---

##### `externalLoadBalancerIpv4AddressPoolsInput`<sup>Optional</sup> <a name="externalLoadBalancerIpv4AddressPoolsInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput"></a>

```typescript
public readonly externalLoadBalancerIpv4AddressPoolsInput: string[];
```

- *Type:* string[]

---

##### `fleetInput`<sup>Optional</sup> <a name="fleetInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleetInput"></a>

```typescript
public readonly fleetInput: GoogleEdgecontainerClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicyInput"></a>

```typescript
public readonly maintenancePolicyInput: GoogleEdgecontainerClusterMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkingInput`<sup>Optional</sup> <a name="networkingInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networkingInput"></a>

```typescript
public readonly networkingInput: GoogleEdgecontainerClusterNetworking;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `releaseChannelInput`<sup>Optional</sup> <a name="releaseChannelInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannelInput"></a>

```typescript
public readonly releaseChannelInput: string;
```

- *Type:* string

---

##### `systemAddonsConfigInput`<sup>Optional</sup> <a name="systemAddonsConfigInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfigInput"></a>

```typescript
public readonly systemAddonsConfigInput: GoogleEdgecontainerClusterSystemAddonsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

---

##### `targetVersionInput`<sup>Optional</sup> <a name="targetVersionInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersionInput"></a>

```typescript
public readonly targetVersionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleEdgecontainerClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>

---

##### `defaultMaxPodsPerNode`<sup>Required</sup> <a name="defaultMaxPodsPerNode" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNode"></a>

```typescript
public readonly defaultMaxPodsPerNode: number;
```

- *Type:* number

---

##### `externalLoadBalancerIpv4AddressPools`<sup>Required</sup> <a name="externalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools"></a>

```typescript
public readonly externalLoadBalancerIpv4AddressPools: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `releaseChannel`<sup>Required</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannel"></a>

```typescript
public readonly releaseChannel: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgecontainerClusterAuthorization <a name="GoogleEdgecontainerClusterAuthorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterAuthorization: googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a></code> | admin_users block. |

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization.property.adminUsers"></a>

```typescript
public readonly adminUsers: GoogleEdgecontainerClusterAuthorizationAdminUsers;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#admin_users GoogleEdgecontainerCluster#admin_users}

---

### GoogleEdgecontainerClusterAuthorizationAdminUsers <a name="GoogleEdgecontainerClusterAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterAuthorizationAdminUsers: googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>string</code> | An active Google username. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

An active Google username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#username GoogleEdgecontainerCluster#username}

---

### GoogleEdgecontainerClusterConfig <a name="GoogleEdgecontainerClusterConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterConfig: googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.name">name</a></code> | <code>string</code> | The GDCE cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlaneEncryption">controlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a></code> | control_plane_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.defaultMaxPodsPerNode">defaultMaxPodsPerNode</a></code> | <code>number</code> | The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools">externalLoadBalancerIpv4AddressPools</a></code> | <code>string[]</code> | Address pools for cluster data plane external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the edgecloud cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.releaseChannel">releaseChannel</a></code> | <code>string</code> | The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.systemAddonsConfig">systemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a></code> | system_addons_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.targetVersion">targetVersion</a></code> | <code>string</code> | The target cluster version. For example: "1.5.0". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.authorization"></a>

```typescript
public readonly authorization: GoogleEdgecontainerClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#authorization GoogleEdgecontainerCluster#authorization}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.fleet"></a>

```typescript
public readonly fleet: GoogleEdgecontainerClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#fleet GoogleEdgecontainerCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#location GoogleEdgecontainerCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The GDCE cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#name GoogleEdgecontainerCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.networking"></a>

```typescript
public readonly networking: GoogleEdgecontainerClusterNetworking;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#networking GoogleEdgecontainerCluster#networking}

---

##### `controlPlane`<sup>Optional</sup> <a name="controlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlane"></a>

```typescript
public readonly controlPlane: GoogleEdgecontainerClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#control_plane GoogleEdgecontainerCluster#control_plane}

---

##### `controlPlaneEncryption`<sup>Optional</sup> <a name="controlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlaneEncryption"></a>

```typescript
public readonly controlPlaneEncryption: GoogleEdgecontainerClusterControlPlaneEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

control_plane_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#control_plane_encryption GoogleEdgecontainerCluster#control_plane_encryption}

---

##### `defaultMaxPodsPerNode`<sup>Optional</sup> <a name="defaultMaxPodsPerNode" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.defaultMaxPodsPerNode"></a>

```typescript
public readonly defaultMaxPodsPerNode: number;
```

- *Type:* number

The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster.

If unspecified, the
Kubernetes default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#default_max_pods_per_node GoogleEdgecontainerCluster#default_max_pods_per_node}

---

##### `externalLoadBalancerIpv4AddressPools`<sup>Optional</sup> <a name="externalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools"></a>

```typescript
public readonly externalLoadBalancerIpv4AddressPools: string[];
```

- *Type:* string[]

Address pools for cluster data plane external load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#external_load_balancer_ipv4_address_pools GoogleEdgecontainerCluster#external_load_balancer_ipv4_address_pools}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the edgecloud cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#labels GoogleEdgecontainerCluster#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: GoogleEdgecontainerClusterMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#maintenance_policy GoogleEdgecontainerCluster#maintenance_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}.

---

##### `releaseChannel`<sup>Optional</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.releaseChannel"></a>

```typescript
public readonly releaseChannel: string;
```

- *Type:* string

The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#release_channel GoogleEdgecontainerCluster#release_channel}

---

##### `systemAddonsConfig`<sup>Optional</sup> <a name="systemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.systemAddonsConfig"></a>

```typescript
public readonly systemAddonsConfig: GoogleEdgecontainerClusterSystemAddonsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

system_addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#system_addons_config GoogleEdgecontainerCluster#system_addons_config}

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

The target cluster version. For example: "1.5.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#target_version GoogleEdgecontainerCluster#target_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleEdgecontainerClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#timeouts GoogleEdgecontainerCluster#timeouts}

---

### GoogleEdgecontainerClusterControlPlane <a name="GoogleEdgecontainerClusterControlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterControlPlane: googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.local">local</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a></code> | remote block. |

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.local"></a>

```typescript
public readonly local: GoogleEdgecontainerClusterControlPlaneLocal;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#local GoogleEdgecontainerCluster#local}

---

##### `remote`<sup>Optional</sup> <a name="remote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.remote"></a>

```typescript
public readonly remote: GoogleEdgecontainerClusterControlPlaneRemote;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#remote GoogleEdgecontainerCluster#remote}

---

### GoogleEdgecontainerClusterControlPlaneEncryption <a name="GoogleEdgecontainerClusterControlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterControlPlaneEncryption: googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption.property.kmsKey">kmsKey</a></code> | <code>string</code> | The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#kms_key GoogleEdgecontainerCluster#kms_key}

---

### GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus <a name="GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterControlPlaneEncryptionKmsStatus: googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus = { ... }
```


### GoogleEdgecontainerClusterControlPlaneLocal <a name="GoogleEdgecontainerClusterControlPlaneLocal" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterControlPlaneLocal: googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.machineFilter">machineFilter</a></code> | <code>string</code> | Only machines matching this filter will be allowed to host control plane nodes. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeCount">nodeCount</a></code> | <code>number</code> | The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeLocation">nodeLocation</a></code> | <code>string</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy">sharedDeploymentPolicy</a></code> | <code>string</code> | Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"]. |

---

##### `machineFilter`<sup>Optional</sup> <a name="machineFilter" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.machineFilter"></a>

```typescript
public readonly machineFilter: string;
```

- *Type:* string

Only machines matching this filter will be allowed to host control plane nodes.

The filtering language accepts strings like "name=<name>",
and is documented here: [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#machine_filter GoogleEdgecontainerCluster#machine_filter}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#node_count GoogleEdgecontainerCluster#node_count}

---

##### `nodeLocation`<sup>Optional</sup> <a name="nodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeLocation"></a>

```typescript
public readonly nodeLocation: string;
```

- *Type:* string

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#node_location GoogleEdgecontainerCluster#node_location}

---

##### `sharedDeploymentPolicy`<sup>Optional</sup> <a name="sharedDeploymentPolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy"></a>

```typescript
public readonly sharedDeploymentPolicy: string;
```

- *Type:* string

Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#shared_deployment_policy GoogleEdgecontainerCluster#shared_deployment_policy}

---

### GoogleEdgecontainerClusterControlPlaneRemote <a name="GoogleEdgecontainerClusterControlPlaneRemote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterControlPlaneRemote: googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote.property.nodeLocation">nodeLocation</a></code> | <code>string</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |

---

##### `nodeLocation`<sup>Optional</sup> <a name="nodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote.property.nodeLocation"></a>

```typescript
public readonly nodeLocation: string;
```

- *Type:* string

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#node_location GoogleEdgecontainerCluster#node_location}

---

### GoogleEdgecontainerClusterFleet <a name="GoogleEdgecontainerClusterFleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterFleet: googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet.property.project">project</a></code> | <code>string</code> | The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}

---

### GoogleEdgecontainerClusterMaintenanceEvents <a name="GoogleEdgecontainerClusterMaintenanceEvents" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterMaintenanceEvents: googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents = { ... }
```


### GoogleEdgecontainerClusterMaintenancePolicy <a name="GoogleEdgecontainerClusterMaintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterMaintenancePolicy: googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a></code> | window block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.maintenanceExclusions">maintenanceExclusions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>[]</code> | maintenance_exclusions block. |

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.window"></a>

```typescript
public readonly window: GoogleEdgecontainerClusterMaintenancePolicyWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---

##### `maintenanceExclusions`<sup>Optional</sup> <a name="maintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.maintenanceExclusions"></a>

```typescript
public readonly maintenanceExclusions: IResolvable | GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>[]

maintenance_exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#maintenance_exclusions GoogleEdgecontainerCluster#maintenance_exclusions}

---

### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions: googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.id">id</a></code> | <code>string</code> | A unique (per cluster) id for the window. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | window block. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique (per cluster) id for the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.window"></a>

```typescript
public readonly window: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---

### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow: googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.endTime">endTime</a></code> | <code>string</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.startTime">startTime</a></code> | <code>string</code> | The time that the window first starts. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#end_time GoogleEdgecontainerCluster#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#start_time GoogleEdgecontainerCluster#start_time}

---

### GoogleEdgecontainerClusterMaintenancePolicyWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterMaintenancePolicyWindow: googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow">recurringWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | recurring_window block. |

---

##### `recurringWindow`<sup>Required</sup> <a name="recurringWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow"></a>

```typescript
public readonly recurringWindow: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

recurring_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#recurring_window GoogleEdgecontainerCluster#recurring_window}

---

### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow: googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence">recurrence</a></code> | <code>string</code> | An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | window block. |

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence"></a>

```typescript
public readonly recurrence: string;
```

- *Type:* string

An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#recurrence GoogleEdgecontainerCluster#recurrence}

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window"></a>

```typescript
public readonly window: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---

### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow: googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime">endTime</a></code> | <code>string</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime">startTime</a></code> | <code>string</code> | The time that the window first starts. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#end_time GoogleEdgecontainerCluster#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#start_time GoogleEdgecontainerCluster#start_time}

---

### GoogleEdgecontainerClusterNetworking <a name="GoogleEdgecontainerClusterNetworking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterNetworking: googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks">clusterIpv4CidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks">servicesIpv4CidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks">clusterIpv6CidrBlocks</a></code> | <code>string[]</code> | If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks">servicesIpv6CidrBlocks</a></code> | <code>string[]</code> | If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |

---

##### `clusterIpv4CidrBlocks`<sup>Required</sup> <a name="clusterIpv4CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks"></a>

```typescript
public readonly clusterIpv4CidrBlocks: string[];
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#cluster_ipv4_cidr_blocks GoogleEdgecontainerCluster#cluster_ipv4_cidr_blocks}

---

##### `servicesIpv4CidrBlocks`<sup>Required</sup> <a name="servicesIpv4CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks"></a>

```typescript
public readonly servicesIpv4CidrBlocks: string[];
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#services_ipv4_cidr_blocks GoogleEdgecontainerCluster#services_ipv4_cidr_blocks}

---

##### `clusterIpv6CidrBlocks`<sup>Optional</sup> <a name="clusterIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks"></a>

```typescript
public readonly clusterIpv6CidrBlocks: string[];
```

- *Type:* string[]

If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#cluster_ipv6_cidr_blocks GoogleEdgecontainerCluster#cluster_ipv6_cidr_blocks}

---

##### `servicesIpv6CidrBlocks`<sup>Optional</sup> <a name="servicesIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks"></a>

```typescript
public readonly servicesIpv6CidrBlocks: string[];
```

- *Type:* string[]

If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#services_ipv6_cidr_blocks GoogleEdgecontainerCluster#services_ipv6_cidr_blocks}

---

### GoogleEdgecontainerClusterSystemAddonsConfig <a name="GoogleEdgecontainerClusterSystemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterSystemAddonsConfig: googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a></code> | ingress block. |

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig.property.ingress"></a>

```typescript
public readonly ingress: GoogleEdgecontainerClusterSystemAddonsConfigIngress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#ingress GoogleEdgecontainerCluster#ingress}

---

### GoogleEdgecontainerClusterSystemAddonsConfigIngress <a name="GoogleEdgecontainerClusterSystemAddonsConfigIngress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterSystemAddonsConfigIngress: googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Ingress is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip">ipv4Vip</a></code> | <code>string</code> | Ingress VIP. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Ingress is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#disabled GoogleEdgecontainerCluster#disabled}

---

##### `ipv4Vip`<sup>Optional</sup> <a name="ipv4Vip" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip"></a>

```typescript
public readonly ipv4Vip: string;
```

- *Type:* string

Ingress VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#ipv4_vip GoogleEdgecontainerCluster#ipv4_vip}

---

### GoogleEdgecontainerClusterTimeouts <a name="GoogleEdgecontainerClusterTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

const googleEdgecontainerClusterTimeouts: googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#create GoogleEdgecontainerCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#delete GoogleEdgecontainerCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#update GoogleEdgecontainerCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#create GoogleEdgecontainerCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#delete GoogleEdgecontainerCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_cluster#update GoogleEdgecontainerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference <a name="GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterAuthorizationAdminUsers;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

---


### GoogleEdgecontainerClusterAuthorizationOutputReference <a name="GoogleEdgecontainerClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.putAdminUsers"></a>

```typescript
public putAdminUsers(value: GoogleEdgecontainerClusterAuthorizationAdminUsers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference">GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsers"></a>

```typescript
public readonly adminUsers: GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference">GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference</a>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```typescript
public readonly adminUsersInput: GoogleEdgecontainerClusterAuthorizationAdminUsers;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

---


### GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList <a name="GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.get"></a>

```typescript
public get(index: number): GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference <a name="GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus</a>

---


### GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference <a name="GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion">kmsKeyActiveVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState">kmsKeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus">kmsStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyActiveVersion`<sup>Required</sup> <a name="kmsKeyActiveVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion"></a>

```typescript
public readonly kmsKeyActiveVersion: string;
```

- *Type:* string

---

##### `kmsKeyState`<sup>Required</sup> <a name="kmsKeyState" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState"></a>

```typescript
public readonly kmsKeyState: string;
```

- *Type:* string

---

##### `kmsStatus`<sup>Required</sup> <a name="kmsStatus" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus"></a>

```typescript
public readonly kmsStatus: GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList</a>

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterControlPlaneEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

---


### GoogleEdgecontainerClusterControlPlaneLocalOutputReference <a name="GoogleEdgecontainerClusterControlPlaneLocalOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter">resetMachineFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation">resetNodeLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy">resetSharedDeploymentPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMachineFilter` <a name="resetMachineFilter" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter"></a>

```typescript
public resetMachineFilter(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetNodeLocation` <a name="resetNodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation"></a>

```typescript
public resetNodeLocation(): void
```

##### `resetSharedDeploymentPolicy` <a name="resetSharedDeploymentPolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy"></a>

```typescript
public resetSharedDeploymentPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput">machineFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput">nodeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput">sharedDeploymentPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter">machineFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation">nodeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy">sharedDeploymentPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `machineFilterInput`<sup>Optional</sup> <a name="machineFilterInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput"></a>

```typescript
public readonly machineFilterInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `nodeLocationInput`<sup>Optional</sup> <a name="nodeLocationInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput"></a>

```typescript
public readonly nodeLocationInput: string;
```

- *Type:* string

---

##### `sharedDeploymentPolicyInput`<sup>Optional</sup> <a name="sharedDeploymentPolicyInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput"></a>

```typescript
public readonly sharedDeploymentPolicyInput: string;
```

- *Type:* string

---

##### `machineFilter`<sup>Required</sup> <a name="machineFilter" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter"></a>

```typescript
public readonly machineFilter: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nodeLocation`<sup>Required</sup> <a name="nodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation"></a>

```typescript
public readonly nodeLocation: string;
```

- *Type:* string

---

##### `sharedDeploymentPolicy`<sup>Required</sup> <a name="sharedDeploymentPolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy"></a>

```typescript
public readonly sharedDeploymentPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterControlPlaneLocal;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

---


### GoogleEdgecontainerClusterControlPlaneOutputReference <a name="GoogleEdgecontainerClusterControlPlaneOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal">putLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putRemote">putRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetRemote">resetRemote</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocal` <a name="putLocal" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal"></a>

```typescript
public putLocal(value: GoogleEdgecontainerClusterControlPlaneLocal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

---

##### `putRemote` <a name="putRemote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putRemote"></a>

```typescript
public putRemote(value: GoogleEdgecontainerClusterControlPlaneRemote): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putRemote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

---

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetRemote` <a name="resetRemote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetRemote"></a>

```typescript
public resetRemote(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.local">local</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference">GoogleEdgecontainerClusterControlPlaneLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference">GoogleEdgecontainerClusterControlPlaneRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.localInput">localInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remoteInput">remoteInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.local"></a>

```typescript
public readonly local: GoogleEdgecontainerClusterControlPlaneLocalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference">GoogleEdgecontainerClusterControlPlaneLocalOutputReference</a>

---

##### `remote`<sup>Required</sup> <a name="remote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remote"></a>

```typescript
public readonly remote: GoogleEdgecontainerClusterControlPlaneRemoteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference">GoogleEdgecontainerClusterControlPlaneRemoteOutputReference</a>

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.localInput"></a>

```typescript
public readonly localInput: GoogleEdgecontainerClusterControlPlaneLocal;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

---

##### `remoteInput`<sup>Optional</sup> <a name="remoteInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remoteInput"></a>

```typescript
public readonly remoteInput: GoogleEdgecontainerClusterControlPlaneRemote;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

---


### GoogleEdgecontainerClusterControlPlaneRemoteOutputReference <a name="GoogleEdgecontainerClusterControlPlaneRemoteOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation">resetNodeLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeLocation` <a name="resetNodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation"></a>

```typescript
public resetNodeLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput">nodeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation">nodeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeLocationInput`<sup>Optional</sup> <a name="nodeLocationInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput"></a>

```typescript
public readonly nodeLocationInput: string;
```

- *Type:* string

---

##### `nodeLocation`<sup>Required</sup> <a name="nodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation"></a>

```typescript
public readonly nodeLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterControlPlaneRemote;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

---


### GoogleEdgecontainerClusterFleetOutputReference <a name="GoogleEdgecontainerClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

---


### GoogleEdgecontainerClusterMaintenanceEventsList <a name="GoogleEdgecontainerClusterMaintenanceEventsList" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.get"></a>

```typescript
public get(index: number): GoogleEdgecontainerClusterMaintenanceEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleEdgecontainerClusterMaintenanceEventsOutputReference <a name="GoogleEdgecontainerClusterMaintenanceEventsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents">GoogleEdgecontainerClusterMaintenanceEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterMaintenanceEvents;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents">GoogleEdgecontainerClusterMaintenanceEvents</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get"></a>

```typescript
public get(index: number): GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>[]

---


### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow">putWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetWindow">resetWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindow` <a name="putWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow"></a>

```typescript
public putWindow(value: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetWindow` <a name="resetWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetWindow"></a>

```typescript
public resetWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.windowInput">windowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.window"></a>

```typescript
public readonly window: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.windowInput"></a>

```typescript
public readonly windowInput: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions">putMaintenanceExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putWindow">putWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resetMaintenanceExclusions">resetMaintenanceExclusions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceExclusions` <a name="putMaintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions"></a>

```typescript
public putMaintenanceExclusions(value: IResolvable | GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>[]

---

##### `putWindow` <a name="putWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putWindow"></a>

```typescript
public putWindow(value: GoogleEdgecontainerClusterMaintenancePolicyWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

---

##### `resetMaintenanceExclusions` <a name="resetMaintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resetMaintenanceExclusions"></a>

```typescript
public resetMaintenanceExclusions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusions">maintenanceExclusions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusionsInput">maintenanceExclusionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput">windowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceExclusions`<sup>Required</sup> <a name="maintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusions"></a>

```typescript
public readonly maintenanceExclusions: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList</a>

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.window"></a>

```typescript
public readonly window: GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference</a>

---

##### `maintenanceExclusionsInput`<sup>Optional</sup> <a name="maintenanceExclusionsInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusionsInput"></a>

```typescript
public readonly maintenanceExclusionsInput: IResolvable | GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>[]

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput"></a>

```typescript
public readonly windowInput: GoogleEdgecontainerClusterMaintenancePolicyWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow">putRecurringWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurringWindow` <a name="putRecurringWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow"></a>

```typescript
public putRecurringWindow(value: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow">recurringWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput">recurringWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurringWindow`<sup>Required</sup> <a name="recurringWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow"></a>

```typescript
public readonly recurringWindow: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a>

---

##### `recurringWindowInput`<sup>Optional</sup> <a name="recurringWindowInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput"></a>

```typescript
public readonly recurringWindowInput: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterMaintenancePolicyWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow">putWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow">resetWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWindow` <a name="putWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow"></a>

```typescript
public putWindow(value: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence"></a>

```typescript
public resetRecurrence(): void
```

##### `resetWindow` <a name="resetWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow"></a>

```typescript
public resetWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput">windowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence">recurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window"></a>

```typescript
public readonly window: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a>

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: string;
```

- *Type:* string

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput"></a>

```typescript
public readonly windowInput: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence"></a>

```typescript
public readonly recurrence: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---


### GoogleEdgecontainerClusterNetworkingOutputReference <a name="GoogleEdgecontainerClusterNetworkingOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks">resetClusterIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks">resetServicesIpv6CidrBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterIpv6CidrBlocks` <a name="resetClusterIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks"></a>

```typescript
public resetClusterIpv6CidrBlocks(): void
```

##### `resetServicesIpv6CidrBlocks` <a name="resetServicesIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks"></a>

```typescript
public resetServicesIpv6CidrBlocks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput">clusterIpv4CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput">clusterIpv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput">servicesIpv4CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput">servicesIpv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks">clusterIpv4CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks">clusterIpv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks">servicesIpv4CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks">servicesIpv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `clusterIpv4CidrBlocksInput`<sup>Optional</sup> <a name="clusterIpv4CidrBlocksInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput"></a>

```typescript
public readonly clusterIpv4CidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `clusterIpv6CidrBlocksInput`<sup>Optional</sup> <a name="clusterIpv6CidrBlocksInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput"></a>

```typescript
public readonly clusterIpv6CidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `servicesIpv4CidrBlocksInput`<sup>Optional</sup> <a name="servicesIpv4CidrBlocksInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput"></a>

```typescript
public readonly servicesIpv4CidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `servicesIpv6CidrBlocksInput`<sup>Optional</sup> <a name="servicesIpv6CidrBlocksInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput"></a>

```typescript
public readonly servicesIpv6CidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `clusterIpv4CidrBlocks`<sup>Required</sup> <a name="clusterIpv4CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks"></a>

```typescript
public readonly clusterIpv4CidrBlocks: string[];
```

- *Type:* string[]

---

##### `clusterIpv6CidrBlocks`<sup>Required</sup> <a name="clusterIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks"></a>

```typescript
public readonly clusterIpv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `servicesIpv4CidrBlocks`<sup>Required</sup> <a name="servicesIpv4CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks"></a>

```typescript
public readonly servicesIpv4CidrBlocks: string[];
```

- *Type:* string[]

---

##### `servicesIpv6CidrBlocks`<sup>Required</sup> <a name="servicesIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks"></a>

```typescript
public readonly servicesIpv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterNetworking;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

---


### GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference <a name="GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip">resetIpv4Vip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetIpv4Vip` <a name="resetIpv4Vip" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip"></a>

```typescript
public resetIpv4Vip(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput">ipv4VipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip">ipv4Vip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipv4VipInput`<sup>Optional</sup> <a name="ipv4VipInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput"></a>

```typescript
public readonly ipv4VipInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipv4Vip`<sup>Required</sup> <a name="ipv4Vip" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip"></a>

```typescript
public readonly ipv4Vip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterSystemAddonsConfigIngress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

---


### GoogleEdgecontainerClusterSystemAddonsConfigOutputReference <a name="GoogleEdgecontainerClusterSystemAddonsConfigOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress">resetIngress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngress` <a name="putIngress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.putIngress"></a>

```typescript
public putIngress(value: GoogleEdgecontainerClusterSystemAddonsConfigIngress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress"></a>

```typescript
public resetIngress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput">ingressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress"></a>

```typescript
public readonly ingress: GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference</a>

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput"></a>

```typescript
public readonly ingressInput: GoogleEdgecontainerClusterSystemAddonsConfigIngress;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleEdgecontainerClusterSystemAddonsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

---


### GoogleEdgecontainerClusterTimeoutsOutputReference <a name="GoogleEdgecontainerClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleEdgecontainerCluster } from '@cdktf/provider-google-beta'

new googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleEdgecontainerClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>

---



