# `googleGkeonpremVmwareCluster` Submodule <a name="`googleGkeonpremVmwareCluster` Submodule" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeonpremVmwareCluster <a name="GoogleGkeonpremVmwareCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster google_gkeonprem_vmware_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster(scope: Construct, id: string, config: GoogleGkeonpremVmwareClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig">GoogleGkeonpremVmwareClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig">GoogleGkeonpremVmwareClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAntiAffinityGroups">putAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAutoRepairConfig">putAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putControlPlaneNode">putControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putDataplaneV2">putDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putUpgradePolicy">putUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putVcenter">putVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAntiAffinityGroups">resetAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAutoRepairConfig">resetAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDataplaneV2">resetDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDisableBundledIngress">resetDisableBundledIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetEnableControlPlaneV2">resetEnableControlPlaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetUpgradePolicy">resetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVcenter">resetVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVmTrackingEnabled">resetVmTrackingEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAntiAffinityGroups` <a name="putAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAntiAffinityGroups"></a>

```typescript
public putAntiAffinityGroups(value: GoogleGkeonpremVmwareClusterAntiAffinityGroups): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAntiAffinityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAuthorization"></a>

```typescript
public putAuthorization(value: GoogleGkeonpremVmwareClusterAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

---

##### `putAutoRepairConfig` <a name="putAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAutoRepairConfig"></a>

```typescript
public putAutoRepairConfig(value: GoogleGkeonpremVmwareClusterAutoRepairConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putAutoRepairConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

---

##### `putControlPlaneNode` <a name="putControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putControlPlaneNode"></a>

```typescript
public putControlPlaneNode(value: GoogleGkeonpremVmwareClusterControlPlaneNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putControlPlaneNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

---

##### `putDataplaneV2` <a name="putDataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putDataplaneV2"></a>

```typescript
public putDataplaneV2(value: GoogleGkeonpremVmwareClusterDataplaneV2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putDataplaneV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putLoadBalancer"></a>

```typescript
public putLoadBalancer(value: GoogleGkeonpremVmwareClusterLoadBalancer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GoogleGkeonpremVmwareClusterNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putStorage"></a>

```typescript
public putStorage(value: GoogleGkeonpremVmwareClusterStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGkeonpremVmwareClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

---

##### `putUpgradePolicy` <a name="putUpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putUpgradePolicy"></a>

```typescript
public putUpgradePolicy(value: GoogleGkeonpremVmwareClusterUpgradePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

---

##### `putVcenter` <a name="putVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putVcenter"></a>

```typescript
public putVcenter(value: GoogleGkeonpremVmwareClusterVcenter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.putVcenter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAntiAffinityGroups` <a name="resetAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAntiAffinityGroups"></a>

```typescript
public resetAntiAffinityGroups(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetAutoRepairConfig` <a name="resetAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetAutoRepairConfig"></a>

```typescript
public resetAutoRepairConfig(): void
```

##### `resetDataplaneV2` <a name="resetDataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDataplaneV2"></a>

```typescript
public resetDataplaneV2(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableBundledIngress` <a name="resetDisableBundledIngress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetDisableBundledIngress"></a>

```typescript
public resetDisableBundledIngress(): void
```

##### `resetEnableControlPlaneV2` <a name="resetEnableControlPlaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetEnableControlPlaneV2"></a>

```typescript
public resetEnableControlPlaneV2(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetLoadBalancer"></a>

```typescript
public resetLoadBalancer(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpgradePolicy` <a name="resetUpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetUpgradePolicy"></a>

```typescript
public resetUpgradePolicy(): void
```

##### `resetVcenter` <a name="resetVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVcenter"></a>

```typescript
public resetVcenter(): void
```

##### `resetVmTrackingEnabled` <a name="resetVmTrackingEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.resetVmTrackingEnabled"></a>

```typescript
public resetVmTrackingEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isConstruct"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformElement"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformResource"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleGkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeonpremVmwareCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeonpremVmwareCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeonpremVmwareCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroups">antiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference">GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference">GoogleGkeonpremVmwareClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfig">autoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference">GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNode">controlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2">dataplaneV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference">GoogleGkeonpremVmwareClusterDataplaneV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList">GoogleGkeonpremVmwareClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.localName">localName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList">GoogleGkeonpremVmwareClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference">GoogleGkeonpremVmwareClusterStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference">GoogleGkeonpremVmwareClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference">GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.validationCheck">validationCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList">GoogleGkeonpremVmwareClusterValidationCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference">GoogleGkeonpremVmwareClusterVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembershipInput">adminClusterMembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroupsInput">antiAffinityGroupsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfigInput">autoRepairConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNodeInput">controlPlaneNodeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2Input">dataplaneV2Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngressInput">disableBundledIngressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2Input">enableControlPlaneV2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancerInput">loadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersionInput">onPremVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicyInput">upgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenterInput">vcenterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabledInput">vmTrackingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembership">adminClusterMembership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngress">disableBundledIngress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2">enableControlPlaneV2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersion">onPremVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabled">vmTrackingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `antiAffinityGroups`<sup>Required</sup> <a name="antiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroups"></a>

```typescript
public readonly antiAffinityGroups: GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference">GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorization"></a>

```typescript
public readonly authorization: GoogleGkeonpremVmwareClusterAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference">GoogleGkeonpremVmwareClusterAuthorizationOutputReference</a>

---

##### `autoRepairConfig`<sup>Required</sup> <a name="autoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfig"></a>

```typescript
public readonly autoRepairConfig: GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference">GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference</a>

---

##### `controlPlaneNode`<sup>Required</sup> <a name="controlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNode"></a>

```typescript
public readonly controlPlaneNode: GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataplaneV2`<sup>Required</sup> <a name="dataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2"></a>

```typescript
public readonly dataplaneV2: GoogleGkeonpremVmwareClusterDataplaneV2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference">GoogleGkeonpremVmwareClusterDataplaneV2OutputReference</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.fleet"></a>

```typescript
public readonly fleet: GoogleGkeonpremVmwareClusterFleetList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList">GoogleGkeonpremVmwareClusterFleetList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: GoogleGkeonpremVmwareClusterLoadBalancerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerOutputReference</a>

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.localName"></a>

```typescript
public readonly localName: string;
```

- *Type:* string

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleGkeonpremVmwareClusterNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.status"></a>

```typescript
public readonly status: GoogleGkeonpremVmwareClusterStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList">GoogleGkeonpremVmwareClusterStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storage"></a>

```typescript
public readonly storage: GoogleGkeonpremVmwareClusterStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference">GoogleGkeonpremVmwareClusterStorageOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeonpremVmwareClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference">GoogleGkeonpremVmwareClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicy"></a>

```typescript
public readonly upgradePolicy: GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference">GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference</a>

---

##### `validationCheck`<sup>Required</sup> <a name="validationCheck" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.validationCheck"></a>

```typescript
public readonly validationCheck: GoogleGkeonpremVmwareClusterValidationCheckList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList">GoogleGkeonpremVmwareClusterValidationCheckList</a>

---

##### `vcenter`<sup>Required</sup> <a name="vcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenter"></a>

```typescript
public readonly vcenter: GoogleGkeonpremVmwareClusterVcenterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference">GoogleGkeonpremVmwareClusterVcenterOutputReference</a>

---

##### `adminClusterMembershipInput`<sup>Optional</sup> <a name="adminClusterMembershipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembershipInput"></a>

```typescript
public readonly adminClusterMembershipInput: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `antiAffinityGroupsInput`<sup>Optional</sup> <a name="antiAffinityGroupsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.antiAffinityGroupsInput"></a>

```typescript
public readonly antiAffinityGroupsInput: GoogleGkeonpremVmwareClusterAntiAffinityGroups;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: GoogleGkeonpremVmwareClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

---

##### `autoRepairConfigInput`<sup>Optional</sup> <a name="autoRepairConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.autoRepairConfigInput"></a>

```typescript
public readonly autoRepairConfigInput: GoogleGkeonpremVmwareClusterAutoRepairConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

---

##### `controlPlaneNodeInput`<sup>Optional</sup> <a name="controlPlaneNodeInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.controlPlaneNodeInput"></a>

```typescript
public readonly controlPlaneNodeInput: GoogleGkeonpremVmwareClusterControlPlaneNode;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

---

##### `dataplaneV2Input`<sup>Optional</sup> <a name="dataplaneV2Input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.dataplaneV2Input"></a>

```typescript
public readonly dataplaneV2Input: GoogleGkeonpremVmwareClusterDataplaneV2;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableBundledIngressInput`<sup>Optional</sup> <a name="disableBundledIngressInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngressInput"></a>

```typescript
public readonly disableBundledIngressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableControlPlaneV2Input`<sup>Optional</sup> <a name="enableControlPlaneV2Input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2Input"></a>

```typescript
public readonly enableControlPlaneV2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: GoogleGkeonpremVmwareClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GoogleGkeonpremVmwareClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

---

##### `onPremVersionInput`<sup>Optional</sup> <a name="onPremVersionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersionInput"></a>

```typescript
public readonly onPremVersionInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.storageInput"></a>

```typescript
public readonly storageInput: GoogleGkeonpremVmwareClusterStorage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGkeonpremVmwareClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

---

##### `upgradePolicyInput`<sup>Optional</sup> <a name="upgradePolicyInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.upgradePolicyInput"></a>

```typescript
public readonly upgradePolicyInput: GoogleGkeonpremVmwareClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

---

##### `vcenterInput`<sup>Optional</sup> <a name="vcenterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vcenterInput"></a>

```typescript
public readonly vcenterInput: GoogleGkeonpremVmwareClusterVcenter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

---

##### `vmTrackingEnabledInput`<sup>Optional</sup> <a name="vmTrackingEnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabledInput"></a>

```typescript
public readonly vmTrackingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminClusterMembership`<sup>Required</sup> <a name="adminClusterMembership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.adminClusterMembership"></a>

```typescript
public readonly adminClusterMembership: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableBundledIngress`<sup>Required</sup> <a name="disableBundledIngress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.disableBundledIngress"></a>

```typescript
public readonly disableBundledIngress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableControlPlaneV2`<sup>Required</sup> <a name="enableControlPlaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.enableControlPlaneV2"></a>

```typescript
public readonly enableControlPlaneV2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.onPremVersion"></a>

```typescript
public readonly onPremVersion: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `vmTrackingEnabled`<sup>Required</sup> <a name="vmTrackingEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.vmTrackingEnabled"></a>

```typescript
public readonly vmTrackingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeonpremVmwareClusterAntiAffinityGroups <a name="GoogleGkeonpremVmwareClusterAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterAntiAffinityGroups: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups.property.aagConfigDisabled">aagConfigDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. |

---

##### `aagConfigDisabled`<sup>Required</sup> <a name="aagConfigDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups.property.aagConfigDisabled"></a>

```typescript
public readonly aagConfigDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#aag_config_disabled GoogleGkeonpremVmwareCluster#aag_config_disabled}

---

### GoogleGkeonpremVmwareClusterAuthorization <a name="GoogleGkeonpremVmwareClusterAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterAuthorization: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>[]</code> | admin_users block. |

---

##### `adminUsers`<sup>Optional</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization.property.adminUsers"></a>

```typescript
public readonly adminUsers: IResolvable | GoogleGkeonpremVmwareClusterAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>[]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#admin_users GoogleGkeonpremVmwareCluster#admin_users}

---

### GoogleGkeonpremVmwareClusterAuthorizationAdminUsers <a name="GoogleGkeonpremVmwareClusterAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterAuthorizationAdminUsers: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>string</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#username GoogleGkeonpremVmwareCluster#username}

---

### GoogleGkeonpremVmwareClusterAutoRepairConfig <a name="GoogleGkeonpremVmwareClusterAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterAutoRepairConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether auto repair is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether auto repair is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}

---

### GoogleGkeonpremVmwareClusterConfig <a name="GoogleGkeonpremVmwareClusterConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.adminClusterMembership">adminClusterMembership</a></code> | <code>string</code> | The admin cluster this VMware User Cluster belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.controlPlaneNode">controlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.name">name</a></code> | <code>string</code> | The VMware cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.onPremVersion">onPremVersion</a></code> | <code>string</code> | The Anthos clusters on the VMware version for your user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations on the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.antiAffinityGroups">antiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.autoRepairConfig">autoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dataplaneV2">dataplaneV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a></code> | dataplane_v2 block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.description">description</a></code> | <code>string</code> | A human readable description of this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.disableBundledIngress">disableBundledIngress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable bundled ingress. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.enableControlPlaneV2">enableControlPlaneV2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable control plane V2. Default to false. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#id GoogleGkeonpremVmwareCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#project GoogleGkeonpremVmwareCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a></code> | vcenter block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vmTrackingEnabled">vmTrackingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable VM tracking. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminClusterMembership`<sup>Required</sup> <a name="adminClusterMembership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.adminClusterMembership"></a>

```typescript
public readonly adminClusterMembership: string;
```

- *Type:* string

The admin cluster this VMware User Cluster belongs to.

This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#admin_cluster_membership GoogleGkeonpremVmwareCluster#admin_cluster_membership}

---

##### `controlPlaneNode`<sup>Required</sup> <a name="controlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.controlPlaneNode"></a>

```typescript
public readonly controlPlaneNode: GoogleGkeonpremVmwareClusterControlPlaneNode;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_node GoogleGkeonpremVmwareCluster#control_plane_node}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#location GoogleGkeonpremVmwareCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The VMware cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#name GoogleGkeonpremVmwareCluster#name}

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.onPremVersion"></a>

```typescript
public readonly onPremVersion: string;
```

- *Type:* string

The Anthos clusters on the VMware version for your user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#on_prem_version GoogleGkeonpremVmwareCluster#on_prem_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations on the VMware User Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#annotations GoogleGkeonpremVmwareCluster#annotations}

---

##### `antiAffinityGroups`<sup>Optional</sup> <a name="antiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.antiAffinityGroups"></a>

```typescript
public readonly antiAffinityGroups: GoogleGkeonpremVmwareClusterAntiAffinityGroups;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#anti_affinity_groups GoogleGkeonpremVmwareCluster#anti_affinity_groups}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.authorization"></a>

```typescript
public readonly authorization: GoogleGkeonpremVmwareClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#authorization GoogleGkeonpremVmwareCluster#authorization}

---

##### `autoRepairConfig`<sup>Optional</sup> <a name="autoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.autoRepairConfig"></a>

```typescript
public readonly autoRepairConfig: GoogleGkeonpremVmwareClusterAutoRepairConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#auto_repair_config GoogleGkeonpremVmwareCluster#auto_repair_config}

---

##### `dataplaneV2`<sup>Optional</sup> <a name="dataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.dataplaneV2"></a>

```typescript
public readonly dataplaneV2: GoogleGkeonpremVmwareClusterDataplaneV2;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

dataplane_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#dataplane_v2 GoogleGkeonpremVmwareCluster#dataplane_v2}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human readable description of this VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#description GoogleGkeonpremVmwareCluster#description}

---

##### `disableBundledIngress`<sup>Optional</sup> <a name="disableBundledIngress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.disableBundledIngress"></a>

```typescript
public readonly disableBundledIngress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable bundled ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#disable_bundled_ingress GoogleGkeonpremVmwareCluster#disable_bundled_ingress}

---

##### `enableControlPlaneV2`<sup>Optional</sup> <a name="enableControlPlaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.enableControlPlaneV2"></a>

```typescript
public readonly enableControlPlaneV2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable control plane V2. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#enable_control_plane_v2 GoogleGkeonpremVmwareCluster#enable_control_plane_v2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#id GoogleGkeonpremVmwareCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: GoogleGkeonpremVmwareClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#load_balancer GoogleGkeonpremVmwareCluster#load_balancer}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleGkeonpremVmwareClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#network_config GoogleGkeonpremVmwareCluster#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#project GoogleGkeonpremVmwareCluster#project}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.storage"></a>

```typescript
public readonly storage: GoogleGkeonpremVmwareClusterStorage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#storage GoogleGkeonpremVmwareCluster#storage}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGkeonpremVmwareClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#timeouts GoogleGkeonpremVmwareCluster#timeouts}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.upgradePolicy"></a>

```typescript
public readonly upgradePolicy: GoogleGkeonpremVmwareClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#upgrade_policy GoogleGkeonpremVmwareCluster#upgrade_policy}

---

##### `vcenter`<sup>Optional</sup> <a name="vcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vcenter"></a>

```typescript
public readonly vcenter: GoogleGkeonpremVmwareClusterVcenter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#vcenter GoogleGkeonpremVmwareCluster#vcenter}

---

##### `vmTrackingEnabled`<sup>Optional</sup> <a name="vmTrackingEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterConfig.property.vmTrackingEnabled"></a>

```typescript
public readonly vmTrackingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable VM tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#vm_tracking_enabled GoogleGkeonpremVmwareCluster#vm_tracking_enabled}

---

### GoogleGkeonpremVmwareClusterControlPlaneNode <a name="GoogleGkeonpremVmwareClusterControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterControlPlaneNode: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.autoResizeConfig">autoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | auto_resize_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.cpus">cpus</a></code> | <code>number</code> | The number of CPUs for each admin cluster node that serve as control planes for this VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.memory">memory</a></code> | <code>number</code> | The megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.replicas">replicas</a></code> | <code>number</code> | The number of control plane nodes for this VMware User Cluster. (default: 1 replica). |

---

##### `autoResizeConfig`<sup>Optional</sup> <a name="autoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.autoResizeConfig"></a>

```typescript
public readonly autoResizeConfig: GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

auto_resize_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#auto_resize_config GoogleGkeonpremVmwareCluster#auto_resize_config}

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.cpus"></a>

```typescript
public readonly cpus: number;
```

- *Type:* number

The number of CPUs for each admin cluster node that serve as control planes for this VMware User Cluster.

(default: 4 CPUs)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#cpus GoogleGkeonpremVmwareCluster#cpus}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

The megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#memory GoogleGkeonpremVmwareCluster#memory}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

The number of control plane nodes for this VMware User Cluster. (default: 1 replica).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#replicas GoogleGkeonpremVmwareCluster#replicas}

---

### GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable control plane node auto resizing. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable control plane node auto resizing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}

---

### GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig = { ... }
```


### GoogleGkeonpremVmwareClusterDataplaneV2 <a name="GoogleGkeonpremVmwareClusterDataplaneV2" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterDataplaneV2: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.advancedNetworking">advancedNetworking</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable advanced networking which requires dataplane_v2_enabled to be set true. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.dataplaneV2Enabled">dataplaneV2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables Dataplane V2. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.windowsDataplaneV2Enabled">windowsDataplaneV2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Dataplane V2 for clusters with Windows nodes. |

---

##### `advancedNetworking`<sup>Optional</sup> <a name="advancedNetworking" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.advancedNetworking"></a>

```typescript
public readonly advancedNetworking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable advanced networking which requires dataplane_v2_enabled to be set true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#advanced_networking GoogleGkeonpremVmwareCluster#advanced_networking}

---

##### `dataplaneV2Enabled`<sup>Optional</sup> <a name="dataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.dataplaneV2Enabled"></a>

```typescript
public readonly dataplaneV2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables Dataplane V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#dataplane_v2_enabled GoogleGkeonpremVmwareCluster#dataplane_v2_enabled}

---

##### `windowsDataplaneV2Enabled`<sup>Optional</sup> <a name="windowsDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2.property.windowsDataplaneV2Enabled"></a>

```typescript
public readonly windowsDataplaneV2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Dataplane V2 for clusters with Windows nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#windows_dataplane_v2_enabled GoogleGkeonpremVmwareCluster#windows_dataplane_v2_enabled}

---

### GoogleGkeonpremVmwareClusterFleet <a name="GoogleGkeonpremVmwareClusterFleet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterFleet: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet = { ... }
```


### GoogleGkeonpremVmwareClusterLoadBalancer <a name="GoogleGkeonpremVmwareClusterLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterLoadBalancer: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.f5Config">f5Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a></code> | f5_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.metalLbConfig">metalLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | metal_lb_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | vip_config block. |

---

##### `f5Config`<sup>Optional</sup> <a name="f5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.f5Config"></a>

```typescript
public readonly f5Config: GoogleGkeonpremVmwareClusterLoadBalancerF5Config;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

f5_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#f5_config GoogleGkeonpremVmwareCluster#f5_config}

---

##### `manualLbConfig`<sup>Optional</sup> <a name="manualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.manualLbConfig"></a>

```typescript
public readonly manualLbConfig: GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#manual_lb_config GoogleGkeonpremVmwareCluster#manual_lb_config}

---

##### `metalLbConfig`<sup>Optional</sup> <a name="metalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.metalLbConfig"></a>

```typescript
public readonly metalLbConfig: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

metal_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#metal_lb_config GoogleGkeonpremVmwareCluster#metal_lb_config}

---

##### `vipConfig`<sup>Optional</sup> <a name="vipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer.property.vipConfig"></a>

```typescript
public readonly vipConfig: GoogleGkeonpremVmwareClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#vip_config GoogleGkeonpremVmwareCluster#vip_config}

---

### GoogleGkeonpremVmwareClusterLoadBalancerF5Config <a name="GoogleGkeonpremVmwareClusterLoadBalancerF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterLoadBalancerF5Config: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.address">address</a></code> | <code>string</code> | The load balancer's IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.partition">partition</a></code> | <code>string</code> | he preexisting partition to be used by the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.snatPool">snatPool</a></code> | <code>string</code> | The pool name. Only necessary, if using SNAT. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The load balancer's IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#address GoogleGkeonpremVmwareCluster#address}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

he preexisting partition to be used by the load balancer.

T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#partition GoogleGkeonpremVmwareCluster#partition}

---

##### `snatPool`<sup>Optional</sup> <a name="snatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config.property.snatPool"></a>

```typescript
public readonly snatPool: string;
```

- *Type:* string

The pool name. Only necessary, if using SNAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#snat_pool GoogleGkeonpremVmwareCluster#snat_pool}

---

### GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig <a name="GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterLoadBalancerManualLbConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort">controlPlaneNodePort</a></code> | <code>number</code> | NodePort for control plane service. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort">ingressHttpNodePort</a></code> | <code>number</code> | NodePort for ingress service's http. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort">ingressHttpsNodePort</a></code> | <code>number</code> | NodePort for ingress service's https. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort">konnectivityServerNodePort</a></code> | <code>number</code> | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). |

---

##### `controlPlaneNodePort`<sup>Optional</sup> <a name="controlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort"></a>

```typescript
public readonly controlPlaneNodePort: number;
```

- *Type:* number

NodePort for control plane service.

The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_node_port GoogleGkeonpremVmwareCluster#control_plane_node_port}

---

##### `ingressHttpNodePort`<sup>Optional</sup> <a name="ingressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort"></a>

```typescript
public readonly ingressHttpNodePort: number;
```

- *Type:* number

NodePort for ingress service's http.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#ingress_http_node_port GoogleGkeonpremVmwareCluster#ingress_http_node_port}

---

##### `ingressHttpsNodePort`<sup>Optional</sup> <a name="ingressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort"></a>

```typescript
public readonly ingressHttpsNodePort: number;
```

- *Type:* number

NodePort for ingress service's https.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#ingress_https_node_port GoogleGkeonpremVmwareCluster#ingress_https_node_port}

---

##### `konnectivityServerNodePort`<sup>Optional</sup> <a name="konnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort"></a>

```typescript
public readonly konnectivityServerNodePort: number;
```

- *Type:* number

NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#konnectivity_server_node_port GoogleGkeonpremVmwareCluster#konnectivity_server_node_port}

---

### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterLoadBalancerMetalLbConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig.property.addressPools">addressPools</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>[]</code> | address_pools block. |

---

##### `addressPools`<sup>Required</sup> <a name="addressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig.property.addressPools"></a>

```typescript
public readonly addressPools: IResolvable | GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>[]

address_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#address_pools GoogleGkeonpremVmwareCluster#address_pools}

---

### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.addresses">addresses</a></code> | <code>string[]</code> | The addresses that are part of this pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.pool">pool</a></code> | <code>string</code> | The name of the address pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.avoidBuggyIps">avoidBuggyIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.manualAssign">manualAssign</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, prevent IP addresses from being automatically assigned. |

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

The addresses that are part of this pool.

Each address
must be either in the CIDR form (1.2.3.0/24) or range
form (1.2.3.1-1.2.3.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#addresses GoogleGkeonpremVmwareCluster#addresses}

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.pool"></a>

```typescript
public readonly pool: string;
```

- *Type:* string

The name of the address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#pool GoogleGkeonpremVmwareCluster#pool}

---

##### `avoidBuggyIps`<sup>Optional</sup> <a name="avoidBuggyIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.avoidBuggyIps"></a>

```typescript
public readonly avoidBuggyIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#avoid_buggy_ips GoogleGkeonpremVmwareCluster#avoid_buggy_ips}

---

##### `manualAssign`<sup>Optional</sup> <a name="manualAssign" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools.property.manualAssign"></a>

```typescript
public readonly manualAssign: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, prevent IP addresses from being automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#manual_assign GoogleGkeonpremVmwareCluster#manual_assign}

---

### GoogleGkeonpremVmwareClusterLoadBalancerVipConfig <a name="GoogleGkeonpremVmwareClusterLoadBalancerVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterLoadBalancerVipConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.controlPlaneVip">controlPlaneVip</a></code> | <code>string</code> | The VIP which you previously set aside for the Kubernetes API of this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.ingressVip">ingressVip</a></code> | <code>string</code> | The VIP which you previously set aside for ingress traffic into this cluster. |

---

##### `controlPlaneVip`<sup>Optional</sup> <a name="controlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```typescript
public readonly controlPlaneVip: string;
```

- *Type:* string

The VIP which you previously set aside for the Kubernetes API of this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_vip GoogleGkeonpremVmwareCluster#control_plane_vip}

---

##### `ingressVip`<sup>Optional</sup> <a name="ingressVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig.property.ingressVip"></a>

```typescript
public readonly ingressVip: string;
```

- *Type:* string

The VIP which you previously set aside for ingress traffic into this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#ingress_vip GoogleGkeonpremVmwareCluster#ingress_vip}

---

### GoogleGkeonpremVmwareClusterNetworkConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterNetworkConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.controlPlaneV2Config">controlPlaneV2Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | control_plane_v2_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.dhcpIpConfig">dhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | dhcp_ip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.hostConfig">hostConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | host_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.staticIpConfig">staticIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | static_ip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.vcenterNetwork">vcenterNetwork</a></code> | <code>string</code> | vcenter_network specifies vCenter network name. Inherited from the admin cluster. |

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#pod_address_cidr_blocks GoogleGkeonpremVmwareCluster#pod_address_cidr_blocks}

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported.. This field
cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#service_address_cidr_blocks GoogleGkeonpremVmwareCluster#service_address_cidr_blocks}

---

##### `controlPlaneV2Config`<sup>Optional</sup> <a name="controlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.controlPlaneV2Config"></a>

```typescript
public readonly controlPlaneV2Config: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

control_plane_v2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_v2_config GoogleGkeonpremVmwareCluster#control_plane_v2_config}

---

##### `dhcpIpConfig`<sup>Optional</sup> <a name="dhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.dhcpIpConfig"></a>

```typescript
public readonly dhcpIpConfig: GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

dhcp_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#dhcp_ip_config GoogleGkeonpremVmwareCluster#dhcp_ip_config}

---

##### `hostConfig`<sup>Optional</sup> <a name="hostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.hostConfig"></a>

```typescript
public readonly hostConfig: GoogleGkeonpremVmwareClusterNetworkConfigHostConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#host_config GoogleGkeonpremVmwareCluster#host_config}

---

##### `staticIpConfig`<sup>Optional</sup> <a name="staticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.staticIpConfig"></a>

```typescript
public readonly staticIpConfig: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

static_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#static_ip_config GoogleGkeonpremVmwareCluster#static_ip_config}

---

##### `vcenterNetwork`<sup>Optional</sup> <a name="vcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig.property.vcenterNetwork"></a>

```typescript
public readonly vcenterNetwork: string;
```

- *Type:* string

vcenter_network specifies vCenter network name. Inherited from the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#vcenter_network GoogleGkeonpremVmwareCluster#vcenter_network}

---

### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.property.controlPlaneIpBlock">controlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | control_plane_ip_block block. |

---

##### `controlPlaneIpBlock`<sup>Optional</sup> <a name="controlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config.property.controlPlaneIpBlock"></a>

```typescript
public readonly controlPlaneIpBlock: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

control_plane_ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_ip_block GoogleGkeonpremVmwareCluster#control_plane_ip_block}

---

### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.gateway">gateway</a></code> | <code>string</code> | The network gateway used by the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.ips">ips</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>[]</code> | ips block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.netmask">netmask</a></code> | <code>string</code> | The netmask used by the VMware User Cluster. |

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

The network gateway used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#gateway GoogleGkeonpremVmwareCluster#gateway}

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.ips"></a>

```typescript
public readonly ips: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>[]

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#ips GoogleGkeonpremVmwareCluster#ips}

---

##### `netmask`<sup>Optional</sup> <a name="netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

The netmask used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#netmask GoogleGkeonpremVmwareCluster#netmask}

---

### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.hostname">hostname</a></code> | <code>string</code> | Hostname of the machine. VM's name will be used if this field is empty. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.ip">ip</a></code> | <code>string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#hostname GoogleGkeonpremVmwareCluster#hostname}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#ip GoogleGkeonpremVmwareCluster#ip}

---

### GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}

---

### GoogleGkeonpremVmwareClusterNetworkConfigHostConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfigHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterNetworkConfigHostConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsSearchDomains">dnsSearchDomains</a></code> | <code>string[]</code> | DNS search domains. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | DNS servers. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.ntpServers">ntpServers</a></code> | <code>string[]</code> | NTP servers. |

---

##### `dnsSearchDomains`<sup>Optional</sup> <a name="dnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsSearchDomains"></a>

```typescript
public readonly dnsSearchDomains: string[];
```

- *Type:* string[]

DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#dns_search_domains GoogleGkeonpremVmwareCluster#dns_search_domains}

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#dns_servers GoogleGkeonpremVmwareCluster#dns_servers}

---

##### `ntpServers`<sup>Optional</sup> <a name="ntpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig.property.ntpServers"></a>

```typescript
public readonly ntpServers: string[];
```

- *Type:* string[]

NTP servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#ntp_servers GoogleGkeonpremVmwareCluster#ntp_servers}

---

### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterNetworkConfigStaticIpConfig: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig.property.ipBlocks">ipBlocks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>[]</code> | ip_blocks block. |

---

##### `ipBlocks`<sup>Required</sup> <a name="ipBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig.property.ipBlocks"></a>

```typescript
public readonly ipBlocks: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>[]

ip_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#ip_blocks GoogleGkeonpremVmwareCluster#ip_blocks}

---

### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway">gateway</a></code> | <code>string</code> | The network gateway used by the VMware User Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.ips">ips</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]</code> | ips block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask">netmask</a></code> | <code>string</code> | The netmask used by the VMware User Cluster. |

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

The network gateway used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#gateway GoogleGkeonpremVmwareCluster#gateway}

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.ips"></a>

```typescript
public readonly ips: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#ips GoogleGkeonpremVmwareCluster#ips}

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

The netmask used by the VMware User Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#netmask GoogleGkeonpremVmwareCluster#netmask}

---

### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip">ip</a></code> | <code>string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname">hostname</a></code> | <code>string</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#ip GoogleGkeonpremVmwareCluster#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#hostname GoogleGkeonpremVmwareCluster#hostname}

---

### GoogleGkeonpremVmwareClusterStatus <a name="GoogleGkeonpremVmwareClusterStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterStatus: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus = { ... }
```


### GoogleGkeonpremVmwareClusterStatusConditions <a name="GoogleGkeonpremVmwareClusterStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterStatusConditions: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions = { ... }
```


### GoogleGkeonpremVmwareClusterStorage <a name="GoogleGkeonpremVmwareClusterStorage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterStorage: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage.property.vsphereCsiDisabled">vsphereCsiDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to deploy vSphere CSI components in the VMware User Cluster. Enabled by default. |

---

##### `vsphereCsiDisabled`<sup>Required</sup> <a name="vsphereCsiDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage.property.vsphereCsiDisabled"></a>

```typescript
public readonly vsphereCsiDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to deploy vSphere CSI components in the VMware User Cluster. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#vsphere_csi_disabled GoogleGkeonpremVmwareCluster#vsphere_csi_disabled}

---

### GoogleGkeonpremVmwareClusterTimeouts <a name="GoogleGkeonpremVmwareClusterTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterTimeouts: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#create GoogleGkeonpremVmwareCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#delete GoogleGkeonpremVmwareCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#update GoogleGkeonpremVmwareCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#create GoogleGkeonpremVmwareCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#delete GoogleGkeonpremVmwareCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#update GoogleGkeonpremVmwareCluster#update}.

---

### GoogleGkeonpremVmwareClusterUpgradePolicy <a name="GoogleGkeonpremVmwareClusterUpgradePolicy" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterUpgradePolicy: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy.property.controlPlaneOnly">controlPlaneOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether the upgrade applies to the control plane only. |

---

##### `controlPlaneOnly`<sup>Optional</sup> <a name="controlPlaneOnly" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy.property.controlPlaneOnly"></a>

```typescript
public readonly controlPlaneOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether the upgrade applies to the control plane only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_only GoogleGkeonpremVmwareCluster#control_plane_only}

---

### GoogleGkeonpremVmwareClusterValidationCheck <a name="GoogleGkeonpremVmwareClusterValidationCheck" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterValidationCheck: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck = { ... }
```


### GoogleGkeonpremVmwareClusterValidationCheckStatus <a name="GoogleGkeonpremVmwareClusterValidationCheckStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterValidationCheckStatus: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus = { ... }
```


### GoogleGkeonpremVmwareClusterValidationCheckStatusResult <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusResult" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterValidationCheckStatusResult: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult = { ... }
```


### GoogleGkeonpremVmwareClusterVcenter <a name="GoogleGkeonpremVmwareClusterVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

const googleGkeonpremVmwareClusterVcenter: googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.caCertData">caCertData</a></code> | <code>string</code> | Contains the vCenter CA certificate public key for SSL verification. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.cluster">cluster</a></code> | <code>string</code> | The name of the vCenter cluster for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datacenter">datacenter</a></code> | <code>string</code> | The name of the vCenter datacenter for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datastore">datastore</a></code> | <code>string</code> | The name of the vCenter datastore for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.folder">folder</a></code> | <code>string</code> | The name of the vCenter folder for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.resourcePool">resourcePool</a></code> | <code>string</code> | The name of the vCenter resource pool for the user cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.storagePolicyName">storagePolicyName</a></code> | <code>string</code> | The name of the vCenter storage policy for the user cluster. |

---

##### `caCertData`<sup>Optional</sup> <a name="caCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.caCertData"></a>

```typescript
public readonly caCertData: string;
```

- *Type:* string

Contains the vCenter CA certificate public key for SSL verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#ca_cert_data GoogleGkeonpremVmwareCluster#ca_cert_data}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The name of the vCenter cluster for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#cluster GoogleGkeonpremVmwareCluster#cluster}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

The name of the vCenter datacenter for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#datacenter GoogleGkeonpremVmwareCluster#datacenter}

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.datastore"></a>

```typescript
public readonly datastore: string;
```

- *Type:* string

The name of the vCenter datastore for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#datastore GoogleGkeonpremVmwareCluster#datastore}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The name of the vCenter folder for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#folder GoogleGkeonpremVmwareCluster#folder}

---

##### `resourcePool`<sup>Optional</sup> <a name="resourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.resourcePool"></a>

```typescript
public readonly resourcePool: string;
```

- *Type:* string

The name of the vCenter resource pool for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#resource_pool GoogleGkeonpremVmwareCluster#resource_pool}

---

##### `storagePolicyName`<sup>Optional</sup> <a name="storagePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter.property.storagePolicyName"></a>

```typescript
public readonly storagePolicyName: string;
```

- *Type:* string

The name of the vCenter storage policy for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gkeonprem_vmware_cluster#storage_policy_name GoogleGkeonpremVmwareCluster#storage_policy_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference <a name="GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput">aagConfigDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled">aagConfigDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aagConfigDisabledInput`<sup>Optional</sup> <a name="aagConfigDisabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput"></a>

```typescript
public readonly aagConfigDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `aagConfigDisabled`<sup>Required</sup> <a name="aagConfigDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled"></a>

```typescript
public readonly aagConfigDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterAntiAffinityGroups;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAntiAffinityGroups">GoogleGkeonpremVmwareClusterAntiAffinityGroups</a>

---


### GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList <a name="GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>[]

---


### GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference <a name="GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterAuthorizationAdminUsers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>

---


### GoogleGkeonpremVmwareClusterAuthorizationOutputReference <a name="GoogleGkeonpremVmwareClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resetAdminUsers">resetAdminUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers"></a>

```typescript
public putAdminUsers(value: IResolvable | GoogleGkeonpremVmwareClusterAuthorizationAdminUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>[]

---

##### `resetAdminUsers` <a name="resetAdminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.resetAdminUsers"></a>

```typescript
public resetAdminUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList">GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsers"></a>

```typescript
public readonly adminUsers: GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList">GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList</a>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```typescript
public readonly adminUsersInput: IResolvable | GoogleGkeonpremVmwareClusterAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationAdminUsers">GoogleGkeonpremVmwareClusterAuthorizationAdminUsers</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAuthorization">GoogleGkeonpremVmwareClusterAuthorization</a>

---


### GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference <a name="GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterAutoRepairConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterAutoRepairConfig">GoogleGkeonpremVmwareClusterAutoRepairConfig</a>

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig">putAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetAutoResizeConfig">resetAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetCpus">resetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoResizeConfig` <a name="putAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig"></a>

```typescript
public putAutoResizeConfig(value: GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.putAutoResizeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---

##### `resetAutoResizeConfig` <a name="resetAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetAutoResizeConfig"></a>

```typescript
public resetAutoResizeConfig(): void
```

##### `resetCpus` <a name="resetCpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetCpus"></a>

```typescript
public resetCpus(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.resetReplicas"></a>

```typescript
public resetReplicas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfig">autoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.vsphereConfig">vsphereConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfigInput">autoResizeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpusInput">cpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicasInput">replicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpus">cpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoResizeConfig`<sup>Required</sup> <a name="autoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfig"></a>

```typescript
public readonly autoResizeConfig: GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference</a>

---

##### `vsphereConfig`<sup>Required</sup> <a name="vsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.vsphereConfig"></a>

```typescript
public readonly vsphereConfig: GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList</a>

---

##### `autoResizeConfigInput`<sup>Optional</sup> <a name="autoResizeConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.autoResizeConfigInput"></a>

```typescript
public readonly autoResizeConfigInput: GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig</a>

---

##### `cpusInput`<sup>Optional</sup> <a name="cpusInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpusInput"></a>

```typescript
public readonly cpusInput: number;
```

- *Type:* number

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicasInput"></a>

```typescript
public readonly replicasInput: number;
```

- *Type:* number

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.cpus"></a>

```typescript
public readonly cpus: number;
```

- *Type:* number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterControlPlaneNode;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNode">GoogleGkeonpremVmwareClusterControlPlaneNode</a>

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference <a name="GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.datastore">datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.storagePolicyName">storagePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.datastore"></a>

```typescript
public readonly datastore: string;
```

- *Type:* string

---

##### `storagePolicyName`<sup>Required</sup> <a name="storagePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.storagePolicyName"></a>

```typescript
public readonly storagePolicyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig">GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig</a>

---


### GoogleGkeonpremVmwareClusterDataplaneV2OutputReference <a name="GoogleGkeonpremVmwareClusterDataplaneV2OutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetAdvancedNetworking">resetAdvancedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetDataplaneV2Enabled">resetDataplaneV2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetWindowsDataplaneV2Enabled">resetWindowsDataplaneV2Enabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdvancedNetworking` <a name="resetAdvancedNetworking" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetAdvancedNetworking"></a>

```typescript
public resetAdvancedNetworking(): void
```

##### `resetDataplaneV2Enabled` <a name="resetDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetDataplaneV2Enabled"></a>

```typescript
public resetDataplaneV2Enabled(): void
```

##### `resetWindowsDataplaneV2Enabled` <a name="resetWindowsDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.resetWindowsDataplaneV2Enabled"></a>

```typescript
public resetWindowsDataplaneV2Enabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworkingInput">advancedNetworkingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2EnabledInput">dataplaneV2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2EnabledInput">windowsDataplaneV2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworking">advancedNetworking</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2Enabled">dataplaneV2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2Enabled">windowsDataplaneV2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedNetworkingInput`<sup>Optional</sup> <a name="advancedNetworkingInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworkingInput"></a>

```typescript
public readonly advancedNetworkingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataplaneV2EnabledInput`<sup>Optional</sup> <a name="dataplaneV2EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2EnabledInput"></a>

```typescript
public readonly dataplaneV2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `windowsDataplaneV2EnabledInput`<sup>Optional</sup> <a name="windowsDataplaneV2EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2EnabledInput"></a>

```typescript
public readonly windowsDataplaneV2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `advancedNetworking`<sup>Required</sup> <a name="advancedNetworking" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.advancedNetworking"></a>

```typescript
public readonly advancedNetworking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataplaneV2Enabled`<sup>Required</sup> <a name="dataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.dataplaneV2Enabled"></a>

```typescript
public readonly dataplaneV2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `windowsDataplaneV2Enabled`<sup>Required</sup> <a name="windowsDataplaneV2Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.windowsDataplaneV2Enabled"></a>

```typescript
public readonly windowsDataplaneV2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterDataplaneV2;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterDataplaneV2">GoogleGkeonpremVmwareClusterDataplaneV2</a>

---


### GoogleGkeonpremVmwareClusterFleetList <a name="GoogleGkeonpremVmwareClusterFleetList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterFleetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremVmwareClusterFleetOutputReference <a name="GoogleGkeonpremVmwareClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet">GoogleGkeonpremVmwareClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterFleet">GoogleGkeonpremVmwareClusterFleet</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetSnatPool">resetSnatPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetSnatPool` <a name="resetSnatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.resetSnatPool"></a>

```typescript
public resetSnatPool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput">snatPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPool">snatPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `snatPoolInput`<sup>Optional</sup> <a name="snatPoolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput"></a>

```typescript
public readonly snatPoolInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `snatPool`<sup>Required</sup> <a name="snatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.snatPool"></a>

```typescript
public readonly snatPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterLoadBalancerF5Config;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort">resetControlPlaneNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort">resetIngressHttpNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort">resetIngressHttpsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort">resetKonnectivityServerNodePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneNodePort` <a name="resetControlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort"></a>

```typescript
public resetControlPlaneNodePort(): void
```

##### `resetIngressHttpNodePort` <a name="resetIngressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort"></a>

```typescript
public resetIngressHttpNodePort(): void
```

##### `resetIngressHttpsNodePort` <a name="resetIngressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort"></a>

```typescript
public resetIngressHttpsNodePort(): void
```

##### `resetKonnectivityServerNodePort` <a name="resetKonnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort"></a>

```typescript
public resetKonnectivityServerNodePort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput">controlPlaneNodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput">ingressHttpNodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput">ingressHttpsNodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput">konnectivityServerNodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort">controlPlaneNodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort">ingressHttpNodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort">ingressHttpsNodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort">konnectivityServerNodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneNodePortInput`<sup>Optional</sup> <a name="controlPlaneNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput"></a>

```typescript
public readonly controlPlaneNodePortInput: number;
```

- *Type:* number

---

##### `ingressHttpNodePortInput`<sup>Optional</sup> <a name="ingressHttpNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput"></a>

```typescript
public readonly ingressHttpNodePortInput: number;
```

- *Type:* number

---

##### `ingressHttpsNodePortInput`<sup>Optional</sup> <a name="ingressHttpsNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput"></a>

```typescript
public readonly ingressHttpsNodePortInput: number;
```

- *Type:* number

---

##### `konnectivityServerNodePortInput`<sup>Optional</sup> <a name="konnectivityServerNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput"></a>

```typescript
public readonly konnectivityServerNodePortInput: number;
```

- *Type:* number

---

##### `controlPlaneNodePort`<sup>Required</sup> <a name="controlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort"></a>

```typescript
public readonly controlPlaneNodePort: number;
```

- *Type:* number

---

##### `ingressHttpNodePort`<sup>Required</sup> <a name="ingressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort"></a>

```typescript
public readonly ingressHttpNodePort: number;
```

- *Type:* number

---

##### `ingressHttpsNodePort`<sup>Required</sup> <a name="ingressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort"></a>

```typescript
public readonly ingressHttpsNodePort: number;
```

- *Type:* number

---

##### `konnectivityServerNodePort`<sup>Required</sup> <a name="konnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort"></a>

```typescript
public readonly konnectivityServerNodePort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>[]

---


### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetAvoidBuggyIps">resetAvoidBuggyIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetManualAssign">resetManualAssign</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvoidBuggyIps` <a name="resetAvoidBuggyIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetAvoidBuggyIps"></a>

```typescript
public resetAvoidBuggyIps(): void
```

##### `resetManualAssign` <a name="resetManualAssign" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.resetManualAssign"></a>

```typescript
public resetManualAssign(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addressesInput">addressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIpsInput">avoidBuggyIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssignInput">manualAssignInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.poolInput">poolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIps">avoidBuggyIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssign">manualAssign</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.pool">pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addressesInput"></a>

```typescript
public readonly addressesInput: string[];
```

- *Type:* string[]

---

##### `avoidBuggyIpsInput`<sup>Optional</sup> <a name="avoidBuggyIpsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIpsInput"></a>

```typescript
public readonly avoidBuggyIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manualAssignInput`<sup>Optional</sup> <a name="manualAssignInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssignInput"></a>

```typescript
public readonly manualAssignInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `poolInput`<sup>Optional</sup> <a name="poolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.poolInput"></a>

```typescript
public readonly poolInput: string;
```

- *Type:* string

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `avoidBuggyIps`<sup>Required</sup> <a name="avoidBuggyIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.avoidBuggyIps"></a>

```typescript
public readonly avoidBuggyIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manualAssign`<sup>Required</sup> <a name="manualAssign" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.manualAssign"></a>

```typescript
public readonly manualAssign: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.pool"></a>

```typescript
public readonly pool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools">putAddressPools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddressPools` <a name="putAddressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools"></a>

```typescript
public putAddressPools(value: IResolvable | GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.putAddressPools.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPools">addressPools</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPoolsInput">addressPoolsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressPools`<sup>Required</sup> <a name="addressPools" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPools"></a>

```typescript
public readonly addressPools: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList</a>

---

##### `addressPoolsInput`<sup>Optional</sup> <a name="addressPoolsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.addressPoolsInput"></a>

```typescript
public readonly addressPoolsInput: IResolvable | GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config">putF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig">putManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig">putMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig">putVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetF5Config">resetF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetManualLbConfig">resetManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetMetalLbConfig">resetMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetVipConfig">resetVipConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putF5Config` <a name="putF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config"></a>

```typescript
public putF5Config(value: GoogleGkeonpremVmwareClusterLoadBalancerF5Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putF5Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

---

##### `putManualLbConfig` <a name="putManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```typescript
public putManualLbConfig(value: GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---

##### `putMetalLbConfig` <a name="putMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig"></a>

```typescript
public putMetalLbConfig(value: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putMetalLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---

##### `putVipConfig` <a name="putVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig"></a>

```typescript
public putVipConfig(value: GoogleGkeonpremVmwareClusterLoadBalancerVipConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

---

##### `resetF5Config` <a name="resetF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetF5Config"></a>

```typescript
public resetF5Config(): void
```

##### `resetManualLbConfig` <a name="resetManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```typescript
public resetManualLbConfig(): void
```

##### `resetMetalLbConfig` <a name="resetMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetMetalLbConfig"></a>

```typescript
public resetMetalLbConfig(): void
```

##### `resetVipConfig` <a name="resetVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.resetVipConfig"></a>

```typescript
public resetVipConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5Config">f5Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfig">metalLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5ConfigInput">f5ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfigInput">manualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfigInput">metalLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfigInput">vipConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `f5Config`<sup>Required</sup> <a name="f5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5Config"></a>

```typescript
public readonly f5Config: GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference</a>

---

##### `manualLbConfig`<sup>Required</sup> <a name="manualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```typescript
public readonly manualLbConfig: GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `metalLbConfig`<sup>Required</sup> <a name="metalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfig"></a>

```typescript
public readonly metalLbConfig: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference</a>

---

##### `vipConfig`<sup>Required</sup> <a name="vipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfig"></a>

```typescript
public readonly vipConfig: GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference">GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference</a>

---

##### `f5ConfigInput`<sup>Optional</sup> <a name="f5ConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.f5ConfigInput"></a>

```typescript
public readonly f5ConfigInput: GoogleGkeonpremVmwareClusterLoadBalancerF5Config;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerF5Config">GoogleGkeonpremVmwareClusterLoadBalancerF5Config</a>

---

##### `manualLbConfigInput`<sup>Optional</sup> <a name="manualLbConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```typescript
public readonly manualLbConfigInput: GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig</a>

---

##### `metalLbConfigInput`<sup>Optional</sup> <a name="metalLbConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.metalLbConfigInput"></a>

```typescript
public readonly metalLbConfigInput: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig</a>

---

##### `vipConfigInput`<sup>Optional</sup> <a name="vipConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```typescript
public readonly vipConfigInput: GoogleGkeonpremVmwareClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancer">GoogleGkeonpremVmwareClusterLoadBalancer</a>

---


### GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference <a name="GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetControlPlaneVip">resetControlPlaneVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetIngressVip">resetIngressVip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneVip` <a name="resetControlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetControlPlaneVip"></a>

```typescript
public resetControlPlaneVip(): void
```

##### `resetIngressVip` <a name="resetIngressVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.resetIngressVip"></a>

```typescript
public resetIngressVip(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">controlPlaneVipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVipInput">ingressVipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">controlPlaneVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVip">ingressVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneVipInput`<sup>Optional</sup> <a name="controlPlaneVipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```typescript
public readonly controlPlaneVipInput: string;
```

- *Type:* string

---

##### `ingressVipInput`<sup>Optional</sup> <a name="ingressVipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVipInput"></a>

```typescript
public readonly ingressVipInput: string;
```

- *Type:* string

---

##### `controlPlaneVip`<sup>Required</sup> <a name="controlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```typescript
public readonly controlPlaneVip: string;
```

- *Type:* string

---

##### `ingressVip`<sup>Required</sup> <a name="ingressVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.ingressVip"></a>

```typescript
public readonly ingressVip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareClusterLoadBalancerVipConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>[]

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetIp">resetIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.resetIp"></a>

```typescript
public resetIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps">putIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetGateway">resetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetNetmask">resetNetmask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIps` <a name="putIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps"></a>

```typescript
public putIps(value: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.putIps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>[]

---

##### `resetGateway` <a name="resetGateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetGateway"></a>

```typescript
public resetGateway(): void
```

##### `resetIps` <a name="resetIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetIps"></a>

```typescript
public resetIps(): void
```

##### `resetNetmask` <a name="resetNetmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.resetNetmask"></a>

```typescript
public resetNetmask(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ips">ips</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ipsInput">ipsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ips"></a>

```typescript
public readonly ips: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.ipsInput"></a>

```typescript
public readonly ipsInput: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps</a>[]

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmaskInput"></a>

```typescript
public readonly netmaskInput: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock">putControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resetControlPlaneIpBlock">resetControlPlaneIpBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPlaneIpBlock` <a name="putControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock"></a>

```typescript
public putControlPlaneIpBlock(value: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.putControlPlaneIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---

##### `resetControlPlaneIpBlock` <a name="resetControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.resetControlPlaneIpBlock"></a>

```typescript
public resetControlPlaneIpBlock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlock">controlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlockInput">controlPlaneIpBlockInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneIpBlock`<sup>Required</sup> <a name="controlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlock"></a>

```typescript
public readonly controlPlaneIpBlock: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference</a>

---

##### `controlPlaneIpBlockInput`<sup>Optional</sup> <a name="controlPlaneIpBlockInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.controlPlaneIpBlockInput"></a>

```typescript
public readonly controlPlaneIpBlockInput: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains">resetDnsSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetNtpServers">resetNtpServers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsSearchDomains` <a name="resetDnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains"></a>

```typescript
public resetDnsSearchDomains(): void
```

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetDnsServers"></a>

```typescript
public resetDnsServers(): void
```

##### `resetNtpServers` <a name="resetNtpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.resetNtpServers"></a>

```typescript
public resetNtpServers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput">dnsSearchDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput">dnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput">ntpServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains">dnsSearchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServers">ntpServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsSearchDomainsInput`<sup>Optional</sup> <a name="dnsSearchDomainsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput"></a>

```typescript
public readonly dnsSearchDomainsInput: string[];
```

- *Type:* string[]

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput"></a>

```typescript
public readonly dnsServersInput: string[];
```

- *Type:* string[]

---

##### `ntpServersInput`<sup>Optional</sup> <a name="ntpServersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput"></a>

```typescript
public readonly ntpServersInput: string[];
```

- *Type:* string[]

---

##### `dnsSearchDomains`<sup>Required</sup> <a name="dnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains"></a>

```typescript
public readonly dnsSearchDomains: string[];
```

- *Type:* string[]

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

---

##### `ntpServers`<sup>Required</sup> <a name="ntpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.ntpServers"></a>

```typescript
public readonly ntpServers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterNetworkConfigHostConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config">putControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig">putDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig">putHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig">putStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetControlPlaneV2Config">resetControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetDhcpIpConfig">resetDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetHostConfig">resetHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetStaticIpConfig">resetStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetVcenterNetwork">resetVcenterNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPlaneV2Config` <a name="putControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config"></a>

```typescript
public putControlPlaneV2Config(value: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putControlPlaneV2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---

##### `putDhcpIpConfig` <a name="putDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig"></a>

```typescript
public putDhcpIpConfig(value: GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putDhcpIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---

##### `putHostConfig` <a name="putHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig"></a>

```typescript
public putHostConfig(value: GoogleGkeonpremVmwareClusterNetworkConfigHostConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

---

##### `putStaticIpConfig` <a name="putStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig"></a>

```typescript
public putStaticIpConfig(value: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.putStaticIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---

##### `resetControlPlaneV2Config` <a name="resetControlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetControlPlaneV2Config"></a>

```typescript
public resetControlPlaneV2Config(): void
```

##### `resetDhcpIpConfig` <a name="resetDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetDhcpIpConfig"></a>

```typescript
public resetDhcpIpConfig(): void
```

##### `resetHostConfig` <a name="resetHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetHostConfig"></a>

```typescript
public resetHostConfig(): void
```

##### `resetStaticIpConfig` <a name="resetStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetStaticIpConfig"></a>

```typescript
public resetStaticIpConfig(): void
```

##### `resetVcenterNetwork` <a name="resetVcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.resetVcenterNetwork"></a>

```typescript
public resetVcenterNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2Config">controlPlaneV2Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfig">dhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfig">hostConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfig">staticIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2ConfigInput">controlPlaneV2ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfigInput">dhcpIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfigInput">hostConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput">podAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput">serviceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfigInput">staticIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetworkInput">vcenterNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetwork">vcenterNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneV2Config`<sup>Required</sup> <a name="controlPlaneV2Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2Config"></a>

```typescript
public readonly controlPlaneV2Config: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference</a>

---

##### `dhcpIpConfig`<sup>Required</sup> <a name="dhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfig"></a>

```typescript
public readonly dhcpIpConfig: GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference</a>

---

##### `hostConfig`<sup>Required</sup> <a name="hostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfig"></a>

```typescript
public readonly hostConfig: GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference</a>

---

##### `staticIpConfig`<sup>Required</sup> <a name="staticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfig"></a>

```typescript
public readonly staticIpConfig: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference</a>

---

##### `controlPlaneV2ConfigInput`<sup>Optional</sup> <a name="controlPlaneV2ConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.controlPlaneV2ConfigInput"></a>

```typescript
public readonly controlPlaneV2ConfigInput: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config">GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config</a>

---

##### `dhcpIpConfigInput`<sup>Optional</sup> <a name="dhcpIpConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.dhcpIpConfigInput"></a>

```typescript
public readonly dhcpIpConfigInput: GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig</a>

---

##### `hostConfigInput`<sup>Optional</sup> <a name="hostConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.hostConfigInput"></a>

```typescript
public readonly hostConfigInput: GoogleGkeonpremVmwareClusterNetworkConfigHostConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareClusterNetworkConfigHostConfig</a>

---

##### `podAddressCidrBlocksInput`<sup>Optional</sup> <a name="podAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput"></a>

```typescript
public readonly podAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocksInput`<sup>Optional</sup> <a name="serviceAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput"></a>

```typescript
public readonly serviceAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `staticIpConfigInput`<sup>Optional</sup> <a name="staticIpConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.staticIpConfigInput"></a>

```typescript
public readonly staticIpConfigInput: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---

##### `vcenterNetworkInput`<sup>Optional</sup> <a name="vcenterNetworkInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetworkInput"></a>

```typescript
public readonly vcenterNetworkInput: string;
```

- *Type:* string

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `vcenterNetwork`<sup>Required</sup> <a name="vcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.vcenterNetwork"></a>

```typescript
public readonly vcenterNetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfig">GoogleGkeonpremVmwareClusterNetworkConfig</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>[]

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps">putIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIps` <a name="putIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps"></a>

```typescript
public putIps(value: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips">ips</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput">ipsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips"></a>

```typescript
public readonly ips: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput"></a>

```typescript
public readonly ipsInput: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput"></a>

```typescript
public readonly netmaskInput: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>

---


### GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference <a name="GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks">putIpBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpBlocks` <a name="putIpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks"></a>

```typescript
public putIpBlocks(value: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks">ipBlocks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput">ipBlocksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipBlocks`<sup>Required</sup> <a name="ipBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks"></a>

```typescript
public readonly ipBlocks: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList</a>

---

##### `ipBlocksInput`<sup>Optional</sup> <a name="ipBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput"></a>

```typescript
public readonly ipBlocksInput: IResolvable | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig</a>

---


### GoogleGkeonpremVmwareClusterStatusConditionsList <a name="GoogleGkeonpremVmwareClusterStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremVmwareClusterStatusConditionsOutputReference <a name="GoogleGkeonpremVmwareClusterStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions">GoogleGkeonpremVmwareClusterStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditions">GoogleGkeonpremVmwareClusterStatusConditions</a>

---


### GoogleGkeonpremVmwareClusterStatusList <a name="GoogleGkeonpremVmwareClusterStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremVmwareClusterStatusOutputReference <a name="GoogleGkeonpremVmwareClusterStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList">GoogleGkeonpremVmwareClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus">GoogleGkeonpremVmwareClusterStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GoogleGkeonpremVmwareClusterStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusConditionsList">GoogleGkeonpremVmwareClusterStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStatus">GoogleGkeonpremVmwareClusterStatus</a>

---


### GoogleGkeonpremVmwareClusterStorageOutputReference <a name="GoogleGkeonpremVmwareClusterStorageOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabledInput">vsphereCsiDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabled">vsphereCsiDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vsphereCsiDisabledInput`<sup>Optional</sup> <a name="vsphereCsiDisabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabledInput"></a>

```typescript
public readonly vsphereCsiDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsphereCsiDisabled`<sup>Required</sup> <a name="vsphereCsiDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.vsphereCsiDisabled"></a>

```typescript
public readonly vsphereCsiDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterStorage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterStorage">GoogleGkeonpremVmwareClusterStorage</a>

---


### GoogleGkeonpremVmwareClusterTimeoutsOutputReference <a name="GoogleGkeonpremVmwareClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGkeonpremVmwareClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterTimeouts">GoogleGkeonpremVmwareClusterTimeouts</a>

---


### GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference <a name="GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resetControlPlaneOnly">resetControlPlaneOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlaneOnly` <a name="resetControlPlaneOnly" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.resetControlPlaneOnly"></a>

```typescript
public resetControlPlaneOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnlyInput">controlPlaneOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnly">controlPlaneOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneOnlyInput`<sup>Optional</sup> <a name="controlPlaneOnlyInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnlyInput"></a>

```typescript
public readonly controlPlaneOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `controlPlaneOnly`<sup>Required</sup> <a name="controlPlaneOnly" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.controlPlaneOnly"></a>

```typescript
public readonly controlPlaneOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterUpgradePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterUpgradePolicy">GoogleGkeonpremVmwareClusterUpgradePolicy</a>

---


### GoogleGkeonpremVmwareClusterValidationCheckList <a name="GoogleGkeonpremVmwareClusterValidationCheckList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterValidationCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremVmwareClusterValidationCheckOutputReference <a name="GoogleGkeonpremVmwareClusterValidationCheckOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.scenario">scenario</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList">GoogleGkeonpremVmwareClusterValidationCheckStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck">GoogleGkeonpremVmwareClusterValidationCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `scenario`<sup>Required</sup> <a name="scenario" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.scenario"></a>

```typescript
public readonly scenario: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.status"></a>

```typescript
public readonly status: GoogleGkeonpremVmwareClusterValidationCheckStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList">GoogleGkeonpremVmwareClusterValidationCheckStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterValidationCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheck">GoogleGkeonpremVmwareClusterValidationCheck</a>

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusList <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.result">result</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList">GoogleGkeonpremVmwareClusterValidationCheckStatusResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus">GoogleGkeonpremVmwareClusterValidationCheckStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.result"></a>

```typescript
public readonly result: GoogleGkeonpremVmwareClusterValidationCheckStatusResultList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList">GoogleGkeonpremVmwareClusterValidationCheckStatusResultList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterValidationCheckStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatus">GoogleGkeonpremVmwareClusterValidationCheckStatus</a>

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusResultList <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusResultList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.get"></a>

```typescript
public get(index: number): GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference <a name="GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult">GoogleGkeonpremVmwareClusterValidationCheckStatusResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterValidationCheckStatusResult;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterValidationCheckStatusResult">GoogleGkeonpremVmwareClusterValidationCheckStatusResult</a>

---


### GoogleGkeonpremVmwareClusterVcenterOutputReference <a name="GoogleGkeonpremVmwareClusterVcenterOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer"></a>

```typescript
import { googleGkeonpremVmwareCluster } from '@cdktf/provider-google-beta'

new googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCaCertData">resetCaCertData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetResourcePool">resetResourcePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetStoragePolicyName">resetStoragePolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertData` <a name="resetCaCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCaCertData"></a>

```typescript
public resetCaCertData(): void
```

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetDatastore"></a>

```typescript
public resetDatastore(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetResourcePool` <a name="resetResourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetResourcePool"></a>

```typescript
public resetResourcePool(): void
```

##### `resetStoragePolicyName` <a name="resetStoragePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.resetStoragePolicyName"></a>

```typescript
public resetStoragePolicyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertDataInput">caCertDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastoreInput">datastoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePoolInput">resourcePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyNameInput">storagePolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertData">caCertData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastore">datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePool">resourcePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyName">storagePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `caCertDataInput`<sup>Optional</sup> <a name="caCertDataInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertDataInput"></a>

```typescript
public readonly caCertDataInput: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastoreInput"></a>

```typescript
public readonly datastoreInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `resourcePoolInput`<sup>Optional</sup> <a name="resourcePoolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePoolInput"></a>

```typescript
public readonly resourcePoolInput: string;
```

- *Type:* string

---

##### `storagePolicyNameInput`<sup>Optional</sup> <a name="storagePolicyNameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyNameInput"></a>

```typescript
public readonly storagePolicyNameInput: string;
```

- *Type:* string

---

##### `caCertData`<sup>Required</sup> <a name="caCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.caCertData"></a>

```typescript
public readonly caCertData: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.datastore"></a>

```typescript
public readonly datastore: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `resourcePool`<sup>Required</sup> <a name="resourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.resourcePool"></a>

```typescript
public readonly resourcePool: string;
```

- *Type:* string

---

##### `storagePolicyName`<sup>Required</sup> <a name="storagePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.storagePolicyName"></a>

```typescript
public readonly storagePolicyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGkeonpremVmwareClusterVcenter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareCluster.GoogleGkeonpremVmwareClusterVcenter">GoogleGkeonpremVmwareClusterVcenter</a>

---



