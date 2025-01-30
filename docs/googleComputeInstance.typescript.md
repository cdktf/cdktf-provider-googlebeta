# `googleComputeInstance` Submodule <a name="`googleComputeInstance` Submodule" id="@cdktf/provider-google-beta.googleComputeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstance <a name="GoogleComputeInstance" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance google_compute_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstance(scope: Construct, id: string, config: GoogleComputeInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig">GoogleComputeInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig">GoogleComputeInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAdvancedMachineFeatures">putAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAttachedDisk">putAttachedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putBootDisk">putBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putConfidentialInstanceConfig">putConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putGuestAccelerator">putGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkPerformanceConfig">putNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScratchDisk">putScratchDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putServiceAccount">putServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAdvancedMachineFeatures">resetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAllowStoppingForUpdate">resetAllowStoppingForUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAttachedDisk">resetAttachedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetCanIpForward">resetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetConfidentialInstanceConfig">resetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDesiredStatus">resetDesiredStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetEnableDisplay">resetEnableDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetGuestAccelerator">resetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetKeyRevocationActionType">resetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMetadataStartupScript">resetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetNetworkPerformanceConfig">resetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetPartnerMetadata">resetPartnerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetScratchDisk">resetScratchDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedMachineFeatures` <a name="putAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAdvancedMachineFeatures"></a>

```typescript
public putAdvancedMachineFeatures(value: GoogleComputeInstanceAdvancedMachineFeatures): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a>

---

##### `putAttachedDisk` <a name="putAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAttachedDisk"></a>

```typescript
public putAttachedDisk(value: IResolvable | GoogleComputeInstanceAttachedDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAttachedDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk">GoogleComputeInstanceAttachedDisk</a>[]

---

##### `putBootDisk` <a name="putBootDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putBootDisk"></a>

```typescript
public putBootDisk(value: GoogleComputeInstanceBootDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a>

---

##### `putConfidentialInstanceConfig` <a name="putConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putConfidentialInstanceConfig"></a>

```typescript
public putConfidentialInstanceConfig(value: GoogleComputeInstanceConfidentialInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a>

---

##### `putGuestAccelerator` <a name="putGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putGuestAccelerator"></a>

```typescript
public putGuestAccelerator(value: IResolvable | GoogleComputeInstanceGuestAccelerator[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putGuestAccelerator.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator">GoogleComputeInstanceGuestAccelerator</a>[]

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | GoogleComputeInstanceNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface">GoogleComputeInstanceNetworkInterface</a>[]

---

##### `putNetworkPerformanceConfig` <a name="putNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkPerformanceConfig"></a>

```typescript
public putNetworkPerformanceConfig(value: GoogleComputeInstanceNetworkPerformanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a>

---

##### `putParams` <a name="putParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putParams"></a>

```typescript
public putParams(value: GoogleComputeInstanceParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putReservationAffinity"></a>

```typescript
public putReservationAffinity(value: GoogleComputeInstanceReservationAffinity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a>

---

##### `putScheduling` <a name="putScheduling" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScheduling"></a>

```typescript
public putScheduling(value: GoogleComputeInstanceScheduling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a>

---

##### `putScratchDisk` <a name="putScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScratchDisk"></a>

```typescript
public putScratchDisk(value: IResolvable | GoogleComputeInstanceScratchDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScratchDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk">GoogleComputeInstanceScratchDisk</a>[]

---

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putServiceAccount"></a>

```typescript
public putServiceAccount(value: GoogleComputeInstanceServiceAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: GoogleComputeInstanceShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts">GoogleComputeInstanceTimeouts</a>

---

##### `resetAdvancedMachineFeatures` <a name="resetAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAdvancedMachineFeatures"></a>

```typescript
public resetAdvancedMachineFeatures(): void
```

##### `resetAllowStoppingForUpdate` <a name="resetAllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAllowStoppingForUpdate"></a>

```typescript
public resetAllowStoppingForUpdate(): void
```

##### `resetAttachedDisk` <a name="resetAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAttachedDisk"></a>

```typescript
public resetAttachedDisk(): void
```

##### `resetCanIpForward` <a name="resetCanIpForward" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetCanIpForward"></a>

```typescript
public resetCanIpForward(): void
```

##### `resetConfidentialInstanceConfig` <a name="resetConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetConfidentialInstanceConfig"></a>

```typescript
public resetConfidentialInstanceConfig(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDesiredStatus` <a name="resetDesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDesiredStatus"></a>

```typescript
public resetDesiredStatus(): void
```

##### `resetEnableDisplay` <a name="resetEnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetEnableDisplay"></a>

```typescript
public resetEnableDisplay(): void
```

##### `resetGuestAccelerator` <a name="resetGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetGuestAccelerator"></a>

```typescript
public resetGuestAccelerator(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyRevocationActionType` <a name="resetKeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetKeyRevocationActionType"></a>

```typescript
public resetKeyRevocationActionType(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMetadataStartupScript` <a name="resetMetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMetadataStartupScript"></a>

```typescript
public resetMetadataStartupScript(): void
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMinCpuPlatform"></a>

```typescript
public resetMinCpuPlatform(): void
```

##### `resetNetworkPerformanceConfig` <a name="resetNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetNetworkPerformanceConfig"></a>

```typescript
public resetNetworkPerformanceConfig(): void
```

##### `resetParams` <a name="resetParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetPartnerMetadata` <a name="resetPartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetPartnerMetadata"></a>

```typescript
public resetPartnerMetadata(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetReservationAffinity"></a>

```typescript
public resetReservationAffinity(): void
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetResourcePolicies"></a>

```typescript
public resetResourcePolicies(): void
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetScheduling"></a>

```typescript
public resetScheduling(): void
```

##### `resetScratchDisk` <a name="resetScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetScratchDisk"></a>

```typescript
public resetScratchDisk(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isConstruct"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

googleComputeInstance.GoogleComputeInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformElement"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

googleComputeInstance.GoogleComputeInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformResource"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

googleComputeInstance.GoogleComputeInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

googleComputeInstance.GoogleComputeInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.attachedDisk">attachedDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList">GoogleComputeInstanceAttachedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference">GoogleComputeInstanceBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference">GoogleComputeInstanceConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.cpuPlatform">cpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.currentStatus">currentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.guestAccelerator">guestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList">GoogleComputeInstanceGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataFingerprint">metadataFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList">GoogleComputeInstanceNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference">GoogleComputeInstanceNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference">GoogleComputeInstanceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference">GoogleComputeInstanceReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference">GoogleComputeInstanceSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scratchDisk">scratchDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList">GoogleComputeInstanceScratchDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference">GoogleComputeInstanceServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference">GoogleComputeInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tagsFingerprint">tagsFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference">GoogleComputeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.advancedMachineFeaturesInput">advancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.allowStoppingForUpdateInput">allowStoppingForUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.attachedDiskInput">attachedDiskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk">GoogleComputeInstanceAttachedDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.bootDiskInput">bootDiskInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.canIpForwardInput">canIpForwardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.confidentialInstanceConfigInput">confidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.desiredStatusInput">desiredStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.enableDisplayInput">enableDisplayInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.guestAcceleratorInput">guestAcceleratorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator">GoogleComputeInstanceGuestAccelerator</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.keyRevocationActionTypeInput">keyRevocationActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataStartupScriptInput">metadataStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface">GoogleComputeInstanceNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkPerformanceConfigInput">networkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.partnerMetadataInput">partnerMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scratchDiskInput">scratchDiskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk">GoogleComputeInstanceScratchDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts">GoogleComputeInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.allowStoppingForUpdate">allowStoppingForUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.canIpForward">canIpForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.desiredStatus">desiredStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.enableDisplay">enableDisplay</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataStartupScript">metadataStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.partnerMetadata">partnerMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.advancedMachineFeatures"></a>

```typescript
public readonly advancedMachineFeatures: GoogleComputeInstanceAdvancedMachineFeaturesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceAdvancedMachineFeaturesOutputReference</a>

---

##### `attachedDisk`<sup>Required</sup> <a name="attachedDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.attachedDisk"></a>

```typescript
public readonly attachedDisk: GoogleComputeInstanceAttachedDiskList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList">GoogleComputeInstanceAttachedDiskList</a>

---

##### `bootDisk`<sup>Required</sup> <a name="bootDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.bootDisk"></a>

```typescript
public readonly bootDisk: GoogleComputeInstanceBootDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference">GoogleComputeInstanceBootDiskOutputReference</a>

---

##### `confidentialInstanceConfig`<sup>Required</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.confidentialInstanceConfig"></a>

```typescript
public readonly confidentialInstanceConfig: GoogleComputeInstanceConfidentialInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference">GoogleComputeInstanceConfidentialInstanceConfigOutputReference</a>

---

##### `cpuPlatform`<sup>Required</sup> <a name="cpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.cpuPlatform"></a>

```typescript
public readonly cpuPlatform: string;
```

- *Type:* string

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `currentStatus`<sup>Required</sup> <a name="currentStatus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.currentStatus"></a>

```typescript
public readonly currentStatus: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `guestAccelerator`<sup>Required</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.guestAccelerator"></a>

```typescript
public readonly guestAccelerator: GoogleComputeInstanceGuestAcceleratorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList">GoogleComputeInstanceGuestAcceleratorList</a>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `metadataFingerprint`<sup>Required</sup> <a name="metadataFingerprint" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataFingerprint"></a>

```typescript
public readonly metadataFingerprint: string;
```

- *Type:* string

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkInterface"></a>

```typescript
public readonly networkInterface: GoogleComputeInstanceNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList">GoogleComputeInstanceNetworkInterfaceList</a>

---

##### `networkPerformanceConfig`<sup>Required</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkPerformanceConfig"></a>

```typescript
public readonly networkPerformanceConfig: GoogleComputeInstanceNetworkPerformanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference">GoogleComputeInstanceNetworkPerformanceConfigOutputReference</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.params"></a>

```typescript
public readonly params: GoogleComputeInstanceParamsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference">GoogleComputeInstanceParamsOutputReference</a>

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: GoogleComputeInstanceReservationAffinityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference">GoogleComputeInstanceReservationAffinityOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scheduling"></a>

```typescript
public readonly scheduling: GoogleComputeInstanceSchedulingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference">GoogleComputeInstanceSchedulingOutputReference</a>

---

##### `scratchDisk`<sup>Required</sup> <a name="scratchDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scratchDisk"></a>

```typescript
public readonly scratchDisk: GoogleComputeInstanceScratchDiskList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList">GoogleComputeInstanceScratchDiskList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: GoogleComputeInstanceServiceAccountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference">GoogleComputeInstanceServiceAccountOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleComputeInstanceShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference">GoogleComputeInstanceShieldedInstanceConfigOutputReference</a>

---

##### `tagsFingerprint`<sup>Required</sup> <a name="tagsFingerprint" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tagsFingerprint"></a>

```typescript
public readonly tagsFingerprint: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference">GoogleComputeInstanceTimeoutsOutputReference</a>

---

##### `advancedMachineFeaturesInput`<sup>Optional</sup> <a name="advancedMachineFeaturesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.advancedMachineFeaturesInput"></a>

```typescript
public readonly advancedMachineFeaturesInput: GoogleComputeInstanceAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a>

---

##### `allowStoppingForUpdateInput`<sup>Optional</sup> <a name="allowStoppingForUpdateInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.allowStoppingForUpdateInput"></a>

```typescript
public readonly allowStoppingForUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `attachedDiskInput`<sup>Optional</sup> <a name="attachedDiskInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.attachedDiskInput"></a>

```typescript
public readonly attachedDiskInput: IResolvable | GoogleComputeInstanceAttachedDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk">GoogleComputeInstanceAttachedDisk</a>[]

---

##### `bootDiskInput`<sup>Optional</sup> <a name="bootDiskInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.bootDiskInput"></a>

```typescript
public readonly bootDiskInput: GoogleComputeInstanceBootDisk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a>

---

##### `canIpForwardInput`<sup>Optional</sup> <a name="canIpForwardInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.canIpForwardInput"></a>

```typescript
public readonly canIpForwardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialInstanceConfigInput`<sup>Optional</sup> <a name="confidentialInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.confidentialInstanceConfigInput"></a>

```typescript
public readonly confidentialInstanceConfigInput: GoogleComputeInstanceConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `desiredStatusInput`<sup>Optional</sup> <a name="desiredStatusInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.desiredStatusInput"></a>

```typescript
public readonly desiredStatusInput: string;
```

- *Type:* string

---

##### `enableDisplayInput`<sup>Optional</sup> <a name="enableDisplayInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.enableDisplayInput"></a>

```typescript
public readonly enableDisplayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `guestAcceleratorInput`<sup>Optional</sup> <a name="guestAcceleratorInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.guestAcceleratorInput"></a>

```typescript
public readonly guestAcceleratorInput: IResolvable | GoogleComputeInstanceGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator">GoogleComputeInstanceGuestAccelerator</a>[]

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyRevocationActionTypeInput`<sup>Optional</sup> <a name="keyRevocationActionTypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.keyRevocationActionTypeInput"></a>

```typescript
public readonly keyRevocationActionTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataStartupScriptInput`<sup>Optional</sup> <a name="metadataStartupScriptInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataStartupScriptInput"></a>

```typescript
public readonly metadataStartupScriptInput: string;
```

- *Type:* string

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.minCpuPlatformInput"></a>

```typescript
public readonly minCpuPlatformInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | GoogleComputeInstanceNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface">GoogleComputeInstanceNetworkInterface</a>[]

---

##### `networkPerformanceConfigInput`<sup>Optional</sup> <a name="networkPerformanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkPerformanceConfigInput"></a>

```typescript
public readonly networkPerformanceConfigInput: GoogleComputeInstanceNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a>

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.paramsInput"></a>

```typescript
public readonly paramsInput: GoogleComputeInstanceParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a>

---

##### `partnerMetadataInput`<sup>Optional</sup> <a name="partnerMetadataInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.partnerMetadataInput"></a>

```typescript
public readonly partnerMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.reservationAffinityInput"></a>

```typescript
public readonly reservationAffinityInput: GoogleComputeInstanceReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a>

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.resourcePoliciesInput"></a>

```typescript
public readonly resourcePoliciesInput: string[];
```

- *Type:* string[]

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.schedulingInput"></a>

```typescript
public readonly schedulingInput: GoogleComputeInstanceScheduling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a>

---

##### `scratchDiskInput`<sup>Optional</sup> <a name="scratchDiskInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scratchDiskInput"></a>

```typescript
public readonly scratchDiskInput: IResolvable | GoogleComputeInstanceScratchDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk">GoogleComputeInstanceScratchDisk</a>[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: GoogleComputeInstanceServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: GoogleComputeInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts">GoogleComputeInstanceTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `allowStoppingForUpdate`<sup>Required</sup> <a name="allowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.allowStoppingForUpdate"></a>

```typescript
public readonly allowStoppingForUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canIpForward`<sup>Required</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.canIpForward"></a>

```typescript
public readonly canIpForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `desiredStatus`<sup>Required</sup> <a name="desiredStatus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.desiredStatus"></a>

```typescript
public readonly desiredStatus: string;
```

- *Type:* string

---

##### `enableDisplay`<sup>Required</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.enableDisplay"></a>

```typescript
public readonly enableDisplay: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyRevocationActionType`<sup>Required</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.keyRevocationActionType"></a>

```typescript
public readonly keyRevocationActionType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataStartupScript`<sup>Required</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataStartupScript"></a>

```typescript
public readonly metadataStartupScript: string;
```

- *Type:* string

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partnerMetadata`<sup>Required</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.partnerMetadata"></a>

```typescript
public readonly partnerMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceAdvancedMachineFeatures <a name="GoogleComputeInstanceAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceAdvancedMachineFeatures: googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable UEFI networking for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>string</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.turboMode">turboMode</a></code> | <code>string</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.visibleCoreCount">visibleCoreCount</a></code> | <code>number</code> | The number of physical cores to expose to an instance. |

---

##### `enableNestedVirtualization`<sup>Optional</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```typescript
public readonly enableNestedVirtualization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_nested_virtualization GoogleComputeInstance#enable_nested_virtualization}

---

##### `enableUefiNetworking`<sup>Optional</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```typescript
public readonly enableUefiNetworking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable UEFI networking for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_uefi_networking GoogleComputeInstance#enable_uefi_networking}

---

##### `performanceMonitoringUnit`<sup>Optional</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```typescript
public readonly performanceMonitoringUnit: string;
```

- *Type:* string

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#performance_monitoring_unit GoogleComputeInstance#performance_monitoring_unit}

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#threads_per_core GoogleComputeInstance#threads_per_core}

---

##### `turboMode`<sup>Optional</sup> <a name="turboMode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.turboMode"></a>

```typescript
public readonly turboMode: string;
```

- *Type:* string

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#turbo_mode GoogleComputeInstance#turbo_mode}

---

##### `visibleCoreCount`<sup>Optional</sup> <a name="visibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.visibleCoreCount"></a>

```typescript
public readonly visibleCoreCount: number;
```

- *Type:* number

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#visible_core_count GoogleComputeInstance#visible_core_count}

---

### GoogleComputeInstanceAttachedDisk <a name="GoogleComputeInstanceAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceAttachedDisk: googleComputeInstance.GoogleComputeInstanceAttachedDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.source">source</a></code> | <code>string</code> | The name or self_link of the disk attached to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.deviceName">deviceName</a></code> | <code>string</code> | Name with which the attached disk is accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.diskEncryptionKeyRaw">diskEncryptionKeyRaw</a></code> | <code>string</code> | A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.mode">mode</a></code> | <code>string</code> | Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The name or self_link of the disk attached to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#source GoogleComputeInstance#source}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Name with which the attached disk is accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#device_name GoogleComputeInstance#device_name}

---

##### `diskEncryptionKeyRaw`<sup>Optional</sup> <a name="diskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.diskEncryptionKeyRaw"></a>

```typescript
public readonly diskEncryptionKeyRaw: string;
```

- *Type:* string

A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#disk_encryption_key_raw GoogleComputeInstance#disk_encryption_key_raw}

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#kms_key_self_link GoogleComputeInstance#kms_key_self_link}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#mode GoogleComputeInstance#mode}

---

### GoogleComputeInstanceBootDisk <a name="GoogleComputeInstanceBootDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceBootDisk: googleComputeInstance.GoogleComputeInstanceBootDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.autoDelete">autoDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the disk will be auto-deleted when the instance is deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.deviceName">deviceName</a></code> | <code>string</code> | Name with which attached disk will be accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.diskEncryptionKeyRaw">diskEncryptionKeyRaw</a></code> | <code>string</code> | A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.initializeParams">initializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a></code> | initialize_params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.interface">interface</a></code> | <code>string</code> | The disk interface used for attaching this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.mode">mode</a></code> | <code>string</code> | Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.source">source</a></code> | <code>string</code> | The name or self_link of the disk attached to this instance. |

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the disk will be auto-deleted when the instance is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#auto_delete GoogleComputeInstance#auto_delete}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Name with which attached disk will be accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#device_name GoogleComputeInstance#device_name}

---

##### `diskEncryptionKeyRaw`<sup>Optional</sup> <a name="diskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.diskEncryptionKeyRaw"></a>

```typescript
public readonly diskEncryptionKeyRaw: string;
```

- *Type:* string

A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#disk_encryption_key_raw GoogleComputeInstance#disk_encryption_key_raw}

---

##### `initializeParams`<sup>Optional</sup> <a name="initializeParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.initializeParams"></a>

```typescript
public readonly initializeParams: GoogleComputeInstanceBootDiskInitializeParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#initialize_params GoogleComputeInstance#initialize_params}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

The disk interface used for attaching this disk.

One of SCSI or NVME. (This field is shared with attached_disk and only used for specific cases, please don't specify this field without advice from Google.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#interface GoogleComputeInstance#interface}

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#kms_key_self_link GoogleComputeInstance#kms_key_self_link}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#mode GoogleComputeInstance#mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The name or self_link of the disk attached to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#source GoogleComputeInstance#source}

---

### GoogleComputeInstanceBootDiskInitializeParams <a name="GoogleComputeInstanceBootDiskInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceBootDiskInitializeParams: googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | A flag to enable confidential compute mode on boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.image">image</a></code> | <code>string</code> | The image from which this disk was initialised. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs assigned to the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.provisionedIops">provisionedIops</a></code> | <code>number</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.provisionedThroughput">provisionedThroughput</a></code> | <code>number</code> | Indicates how much throughput to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | A list of self_links of resource policies to attach to the instance's boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.size">size</a></code> | <code>number</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.storagePool">storagePool</a></code> | <code>string</code> | The URL of the storage pool in which the new disk is created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.type">type</a></code> | <code>string</code> | The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced. |

---

##### `enableConfidentialCompute`<sup>Optional</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.enableConfidentialCompute"></a>

```typescript
public readonly enableConfidentialCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A flag to enable confidential compute mode on boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_confidential_compute GoogleComputeInstance#enable_confidential_compute}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The image from which this disk was initialised.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#image GoogleComputeInstance#image}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs assigned to the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#labels GoogleComputeInstance#labels}

---

##### `provisionedIops`<sup>Optional</sup> <a name="provisionedIops" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.provisionedIops"></a>

```typescript
public readonly provisionedIops: number;
```

- *Type:* number

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#provisioned_iops GoogleComputeInstance#provisioned_iops}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: number;
```

- *Type:* number

Indicates how much throughput to provision for the disk.

This sets the number of throughput mb per second that the disk can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#provisioned_throughput GoogleComputeInstance#provisioned_throughput}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#resource_manager_tags GoogleComputeInstance#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

A list of self_links of resource policies to attach to the instance's boot disk.

Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#resource_policies GoogleComputeInstance#resource_policies}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

The size of the image in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#size GoogleComputeInstance#size}

---

##### `storagePool`<sup>Optional</sup> <a name="storagePool" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

The URL of the storage pool in which the new disk is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#storage_pool GoogleComputeInstance#storage_pool}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#type GoogleComputeInstance#type}

---

### GoogleComputeInstanceConfidentialInstanceConfig <a name="GoogleComputeInstanceConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceConfidentialInstanceConfig: googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>string</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `confidentialInstanceType`<sup>Optional</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```typescript
public readonly confidentialInstanceType: string;
```

- *Type:* string

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#confidential_instance_type GoogleComputeInstance#confidential_instance_type}

---

##### `enableConfidentialCompute`<sup>Optional</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```typescript
public readonly enableConfidentialCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_confidential_compute GoogleComputeInstance#enable_confidential_compute}

---

### GoogleComputeInstanceConfig <a name="GoogleComputeInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceConfig: googleComputeInstance.GoogleComputeInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.machineType">machineType</a></code> | <code>string</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.name">name</a></code> | <code>string</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface">GoogleComputeInstanceNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.allowStoppingForUpdate">allowStoppingForUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, allows Terraform to stop the instance to update its properties. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.attachedDisk">attachedDisk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk">GoogleComputeInstanceAttachedDisk</a>[]</code> | attached_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.canIpForward">canIpForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether sending and receiving of packets with non-matching source or destination IPs is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether deletion protection is enabled on this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.description">description</a></code> | <code>string</code> | A brief description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.desiredStatus">desiredStatus</a></code> | <code>string</code> | Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.enableDisplay">enableDisplay</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the instance has virtual displays enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.guestAccelerator">guestAccelerator</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator">GoogleComputeInstanceGuestAccelerator</a>[]</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.hostname">hostname</a></code> | <code>string</code> | A custom hostname for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#id GoogleComputeInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>string</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata key/value pairs made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.metadataStartupScript">metadataStartupScript</a></code> | <code>string</code> | Metadata startup scripts made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | The minimum CPU platform specified for the VM instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.partnerMetadata">partnerMetadata</a></code> | <code>{[ key: string ]: string}</code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.scratchDisk">scratchDisk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk">GoogleComputeInstanceScratchDisk</a>[]</code> | scratch_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.tags">tags</a></code> | <code>string[]</code> | The list of tags attached to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts">GoogleComputeInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.zone">zone</a></code> | <code>string</code> | The zone of the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bootDisk`<sup>Required</sup> <a name="bootDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.bootDisk"></a>

```typescript
public readonly bootDisk: GoogleComputeInstanceBootDisk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#boot_disk GoogleComputeInstance#boot_disk}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The machine type to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#machine_type GoogleComputeInstance#machine_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#name GoogleComputeInstance#name}

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | GoogleComputeInstanceNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface">GoogleComputeInstanceNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_interface GoogleComputeInstance#network_interface}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.advancedMachineFeatures"></a>

```typescript
public readonly advancedMachineFeatures: GoogleComputeInstanceAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#advanced_machine_features GoogleComputeInstance#advanced_machine_features}

---

##### `allowStoppingForUpdate`<sup>Optional</sup> <a name="allowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.allowStoppingForUpdate"></a>

```typescript
public readonly allowStoppingForUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, allows Terraform to stop the instance to update its properties.

If you try to update a property that requires stopping the instance without setting this field, the update will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#allow_stopping_for_update GoogleComputeInstance#allow_stopping_for_update}

---

##### `attachedDisk`<sup>Optional</sup> <a name="attachedDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.attachedDisk"></a>

```typescript
public readonly attachedDisk: IResolvable | GoogleComputeInstanceAttachedDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk">GoogleComputeInstanceAttachedDisk</a>[]

attached_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#attached_disk GoogleComputeInstance#attached_disk}

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.canIpForward"></a>

```typescript
public readonly canIpForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether sending and receiving of packets with non-matching source or destination IPs is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#can_ip_forward GoogleComputeInstance#can_ip_forward}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.confidentialInstanceConfig"></a>

```typescript
public readonly confidentialInstanceConfig: GoogleComputeInstanceConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#confidential_instance_config GoogleComputeInstance#confidential_instance_config}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether deletion protection is enabled on this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#deletion_protection GoogleComputeInstance#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#description GoogleComputeInstance#description}

---

##### `desiredStatus`<sup>Optional</sup> <a name="desiredStatus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.desiredStatus"></a>

```typescript
public readonly desiredStatus: string;
```

- *Type:* string

Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#desired_status GoogleComputeInstance#desired_status}

---

##### `enableDisplay`<sup>Optional</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.enableDisplay"></a>

```typescript
public readonly enableDisplay: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the instance has virtual displays enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_display GoogleComputeInstance#enable_display}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.guestAccelerator"></a>

```typescript
public readonly guestAccelerator: IResolvable | GoogleComputeInstanceGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator">GoogleComputeInstanceGuestAccelerator</a>[]

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#guest_accelerator GoogleComputeInstance#guest_accelerator}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

A custom hostname for the instance.

Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#hostname GoogleComputeInstance#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#id GoogleComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyRevocationActionType`<sup>Optional</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.keyRevocationActionType"></a>

```typescript
public readonly keyRevocationActionType: string;
```

- *Type:* string

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#key_revocation_action_type GoogleComputeInstance#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs assigned to the instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
				Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#labels GoogleComputeInstance#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata key/value pairs made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#metadata GoogleComputeInstance#metadata}

---

##### `metadataStartupScript`<sup>Optional</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.metadataStartupScript"></a>

```typescript
public readonly metadataStartupScript: string;
```

- *Type:* string

Metadata startup scripts made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#metadata_startup_script GoogleComputeInstance#metadata_startup_script}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

The minimum CPU platform specified for the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#min_cpu_platform GoogleComputeInstance#min_cpu_platform}

---

##### `networkPerformanceConfig`<sup>Optional</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.networkPerformanceConfig"></a>

```typescript
public readonly networkPerformanceConfig: GoogleComputeInstanceNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_performance_config GoogleComputeInstance#network_performance_config}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.params"></a>

```typescript
public readonly params: GoogleComputeInstanceParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#params GoogleComputeInstance#params}

---

##### `partnerMetadata`<sup>Optional</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.partnerMetadata"></a>

```typescript
public readonly partnerMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#partner_metadata GoogleComputeInstance#partner_metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#project GoogleComputeInstance#project}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: GoogleComputeInstanceReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#reservation_affinity GoogleComputeInstance#reservation_affinity}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#resource_policies GoogleComputeInstance#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.scheduling"></a>

```typescript
public readonly scheduling: GoogleComputeInstanceScheduling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#scheduling GoogleComputeInstance#scheduling}

---

##### `scratchDisk`<sup>Optional</sup> <a name="scratchDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.scratchDisk"></a>

```typescript
public readonly scratchDisk: IResolvable | GoogleComputeInstanceScratchDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk">GoogleComputeInstanceScratchDisk</a>[]

scratch_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#scratch_disk GoogleComputeInstance#scratch_disk}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: GoogleComputeInstanceServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#service_account GoogleComputeInstance#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleComputeInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#shielded_instance_config GoogleComputeInstance#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The list of tags attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#tags GoogleComputeInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts">GoogleComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#timeouts GoogleComputeInstance#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#zone GoogleComputeInstance#zone}

---

### GoogleComputeInstanceGuestAccelerator <a name="GoogleComputeInstanceGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceGuestAccelerator: googleComputeInstance.GoogleComputeInstanceGuestAccelerator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator.property.count">count</a></code> | <code>number</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator.property.type">type</a></code> | <code>string</code> | The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#count GoogleComputeInstance#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#type GoogleComputeInstance#type}

---

### GoogleComputeInstanceNetworkInterface <a name="GoogleComputeInstanceNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceNetworkInterface: googleComputeInstance.GoogleComputeInstanceNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.accessConfig">accessConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig">GoogleComputeInstanceNetworkInterfaceAccessConfig</a>[]</code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.aliasIpRange">aliasIpRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange">GoogleComputeInstanceNetworkInterfaceAliasIpRange</a>[]</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>number</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a>[]</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.network">network</a></code> | <code>string</code> | The name or self_link of the network attached to this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.networkIp">networkIp</a></code> | <code>string</code> | The private IP address assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.nicType">nicType</a></code> | <code>string</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.queueCount">queueCount</a></code> | <code>number</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | A full or partial URL to a security policy to add to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.stackType">stackType</a></code> | <code>string</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.subnetwork">subnetwork</a></code> | <code>string</code> | The name or self_link of the subnetwork attached to this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.subnetworkProject">subnetworkProject</a></code> | <code>string</code> | The project in which the subnetwork belongs. |

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.accessConfig"></a>

```typescript
public readonly accessConfig: IResolvable | GoogleComputeInstanceNetworkInterfaceAccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig">GoogleComputeInstanceNetworkInterfaceAccessConfig</a>[]

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#access_config GoogleComputeInstance#access_config}

---

##### `aliasIpRange`<sup>Optional</sup> <a name="aliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.aliasIpRange"></a>

```typescript
public readonly aliasIpRange: IResolvable | GoogleComputeInstanceNetworkInterfaceAliasIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange">GoogleComputeInstanceNetworkInterfaceAliasIpRange</a>[]

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#alias_ip_range GoogleComputeInstance#alias_ip_range}

---

##### `internalIpv6PrefixLength`<sup>Optional</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.internalIpv6PrefixLength"></a>

```typescript
public readonly internalIpv6PrefixLength: number;
```

- *Type:* number

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#internal_ipv6_prefix_length GoogleComputeInstance#internal_ipv6_prefix_length}

---

##### `ipv6AccessConfig`<sup>Optional</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.ipv6AccessConfig"></a>

```typescript
public readonly ipv6AccessConfig: IResolvable | GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a>[]

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#ipv6_access_config GoogleComputeInstance#ipv6_access_config}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#ipv6_address GoogleComputeInstance#ipv6_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name or self_link of the network attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network GoogleComputeInstance#network}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_attachment GoogleComputeInstance#network_attachment}

---

##### `networkIp`<sup>Optional</sup> <a name="networkIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.networkIp"></a>

```typescript
public readonly networkIp: string;
```

- *Type:* string

The private IP address assigned to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_ip GoogleComputeInstance#network_ip}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#nic_type GoogleComputeInstance#nic_type}

---

##### `queueCount`<sup>Optional</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.queueCount"></a>

```typescript
public readonly queueCount: number;
```

- *Type:* number

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#queue_count GoogleComputeInstance#queue_count}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

A full or partial URL to a security policy to add to this instance.

If this field is set to an empty string it will remove the associated security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#security_policy GoogleComputeInstance#security_policy}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#stack_type GoogleComputeInstance#stack_type}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The name or self_link of the subnetwork attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#subnetwork GoogleComputeInstance#subnetwork}

---

##### `subnetworkProject`<sup>Optional</sup> <a name="subnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.subnetworkProject"></a>

```typescript
public readonly subnetworkProject: string;
```

- *Type:* string

The project in which the subnetwork belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#subnetwork_project GoogleComputeInstance#subnetwork_project}

---

### GoogleComputeInstanceNetworkInterfaceAccessConfig <a name="GoogleComputeInstanceNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceNetworkInterfaceAccessConfig: googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.natIp">natIp</a></code> | <code>string</code> | The IP address that is be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.networkTier">networkTier</a></code> | <code>string</code> | The networking tier used for configuring this instance. One of PREMIUM or STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>string</code> | The DNS domain name for the public PTR record. |

---

##### `natIp`<sup>Optional</sup> <a name="natIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.natIp"></a>

```typescript
public readonly natIp: string;
```

- *Type:* string

The IP address that is be 1:1 mapped to the instance's network ip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#nat_ip GoogleComputeInstance#nat_ip}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

The networking tier used for configuring this instance. One of PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_tier GoogleComputeInstance#network_tier}

---

##### `publicPtrDomainName`<sup>Optional</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.publicPtrDomainName"></a>

```typescript
public readonly publicPtrDomainName: string;
```

- *Type:* string

The DNS domain name for the public PTR record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#public_ptr_domain_name GoogleComputeInstance#public_ptr_domain_name}

---

### GoogleComputeInstanceNetworkInterfaceAliasIpRange <a name="GoogleComputeInstanceNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceNetworkInterfaceAliasIpRange: googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

The IP CIDR range represented by this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#ip_cidr_range GoogleComputeInstance#ip_cidr_range}

---

##### `subnetworkRangeName`<sup>Optional</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#subnetwork_range_name GoogleComputeInstance#subnetwork_range_name}

---

### GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig <a name="GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceNetworkInterfaceIpv6AccessConfig: googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.networkTier">networkTier</a></code> | <code>string</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.externalIpv6">externalIpv6</a></code> | <code>string</code> | The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength">externalIpv6PrefixLength</a></code> | <code>string</code> | The prefix length of the external IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.name">name</a></code> | <code>string</code> | The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>string</code> | The domain name to be used when creating DNSv6 records for the external IPv6 ranges. |

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_tier GoogleComputeInstance#network_tier}

---

##### `externalIpv6`<sup>Optional</sup> <a name="externalIpv6" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.externalIpv6"></a>

```typescript
public readonly externalIpv6: string;
```

- *Type:* string

The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig.

To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#external_ipv6 GoogleComputeInstance#external_ipv6}

---

##### `externalIpv6PrefixLength`<sup>Optional</sup> <a name="externalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength"></a>

```typescript
public readonly externalIpv6PrefixLength: string;
```

- *Type:* string

The prefix length of the external IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#external_ipv6_prefix_length GoogleComputeInstance#external_ipv6_prefix_length}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#name GoogleComputeInstance#name}

---

##### `publicPtrDomainName`<sup>Optional</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName"></a>

```typescript
public readonly publicPtrDomainName: string;
```

- *Type:* string

The domain name to be used when creating DNSv6 records for the external IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#public_ptr_domain_name GoogleComputeInstance#public_ptr_domain_name}

---

### GoogleComputeInstanceNetworkPerformanceConfig <a name="GoogleComputeInstanceNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceNetworkPerformanceConfig: googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>string</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```typescript
public readonly totalEgressBandwidthTier: string;
```

- *Type:* string

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#total_egress_bandwidth_tier GoogleComputeInstance#total_egress_bandwidth_tier}

---

### GoogleComputeInstanceParams <a name="GoogleComputeInstanceParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceParams: googleComputeInstance.GoogleComputeInstanceParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource manager tags. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#resource_manager_tags GoogleComputeInstance#resource_manager_tags}

---

### GoogleComputeInstanceReservationAffinity <a name="GoogleComputeInstanceReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceReservationAffinity: googleComputeInstance.GoogleComputeInstanceReservationAffinity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity.property.type">type</a></code> | <code>string</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#type GoogleComputeInstance#type}

---

##### `specificReservation`<sup>Optional</sup> <a name="specificReservation" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity.property.specificReservation"></a>

```typescript
public readonly specificReservation: GoogleComputeInstanceReservationAffinitySpecificReservation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#specific_reservation GoogleComputeInstance#specific_reservation}

---

### GoogleComputeInstanceReservationAffinitySpecificReservation <a name="GoogleComputeInstanceReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceReservationAffinitySpecificReservation: googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation.property.key">key</a></code> | <code>string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation.property.values">values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#key GoogleComputeInstance#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#values GoogleComputeInstance#values}

---

### GoogleComputeInstanceScheduling <a name="GoogleComputeInstanceScheduling" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceScheduling: googleComputeInstance.GoogleComputeInstanceScheduling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.automaticRestart">automaticRestart</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.availabilityDomain">availabilityDomain</a></code> | <code>number</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.hostErrorTimeoutSeconds">hostErrorTimeoutSeconds</a></code> | <code>number</code> | Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>string</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a></code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.maintenanceInterval">maintenanceInterval</a></code> | <code>string</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.minNodeCpus">minNodeCpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#min_node_cpus GoogleComputeInstance#min_node_cpus}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.nodeAffinities">nodeAffinities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities">GoogleComputeInstanceSchedulingNodeAffinities</a>[]</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.onHostMaintenance">onHostMaintenance</a></code> | <code>string</code> | Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.preemptible">preemptible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the instance is preemptible. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `automaticRestart`<sup>Optional</sup> <a name="automaticRestart" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.automaticRestart"></a>

```typescript
public readonly automaticRestart: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#automatic_restart GoogleComputeInstance#automatic_restart}

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: number;
```

- *Type:* number

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#availability_domain GoogleComputeInstance#availability_domain}

---

##### `hostErrorTimeoutSeconds`<sup>Optional</sup> <a name="hostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.hostErrorTimeoutSeconds"></a>

```typescript
public readonly hostErrorTimeoutSeconds: number;
```

- *Type:* number

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#host_error_timeout_seconds GoogleComputeInstance#host_error_timeout_seconds}

---

##### `instanceTerminationAction`<sup>Optional</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.instanceTerminationAction"></a>

```typescript
public readonly instanceTerminationAction: string;
```

- *Type:* string

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#instance_termination_action GoogleComputeInstance#instance_termination_action}

---

##### `localSsdRecoveryTimeout`<sup>Optional</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.localSsdRecoveryTimeout"></a>

```typescript
public readonly localSsdRecoveryTimeout: GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a>

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#local_ssd_recovery_timeout GoogleComputeInstance#local_ssd_recovery_timeout}

---

##### `maintenanceInterval`<sup>Optional</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.maintenanceInterval"></a>

```typescript
public readonly maintenanceInterval: string;
```

- *Type:* string

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#maintenance_interval GoogleComputeInstance#maintenance_interval}

---

##### `maxRunDuration`<sup>Optional</sup> <a name="maxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.maxRunDuration"></a>

```typescript
public readonly maxRunDuration: GoogleComputeInstanceSchedulingMaxRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#max_run_duration GoogleComputeInstance#max_run_duration}

---

##### `minNodeCpus`<sup>Optional</sup> <a name="minNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.minNodeCpus"></a>

```typescript
public readonly minNodeCpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#min_node_cpus GoogleComputeInstance#min_node_cpus}.

---

##### `nodeAffinities`<sup>Optional</sup> <a name="nodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.nodeAffinities"></a>

```typescript
public readonly nodeAffinities: IResolvable | GoogleComputeInstanceSchedulingNodeAffinities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities">GoogleComputeInstanceSchedulingNodeAffinities</a>[]

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#node_affinities GoogleComputeInstance#node_affinities}

---

##### `onHostMaintenance`<sup>Optional</sup> <a name="onHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.onHostMaintenance"></a>

```typescript
public readonly onHostMaintenance: string;
```

- *Type:* string

Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#on_host_maintenance GoogleComputeInstance#on_host_maintenance}

---

##### `onInstanceStopAction`<sup>Optional</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.onInstanceStopAction"></a>

```typescript
public readonly onInstanceStopAction: GoogleComputeInstanceSchedulingOnInstanceStopAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#on_instance_stop_action GoogleComputeInstance#on_instance_stop_action}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.preemptible"></a>

```typescript
public readonly preemptible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the instance is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#preemptible GoogleComputeInstance#preemptible}

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#provisioning_model GoogleComputeInstance#provisioning_model}

---

### GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout <a name="GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceSchedulingLocalSsdRecoveryTimeout: googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#seconds GoogleComputeInstance#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#nanos GoogleComputeInstance#nanos}

---

### GoogleComputeInstanceSchedulingMaxRunDuration <a name="GoogleComputeInstanceSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceSchedulingMaxRunDuration: googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#seconds GoogleComputeInstance#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#nanos GoogleComputeInstance#nanos}

---

### GoogleComputeInstanceSchedulingNodeAffinities <a name="GoogleComputeInstanceSchedulingNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceSchedulingNodeAffinities: googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#key GoogleComputeInstance#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#operator GoogleComputeInstance#operator}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#values GoogleComputeInstance#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#key GoogleComputeInstance#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#operator GoogleComputeInstance#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#values GoogleComputeInstance#values}.

---

### GoogleComputeInstanceSchedulingOnInstanceStopAction <a name="GoogleComputeInstanceSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceSchedulingOnInstanceStopAction: googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction.property.discardLocalSsd">discardLocalSsd</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `discardLocalSsd`<sup>Optional</sup> <a name="discardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```typescript
public readonly discardLocalSsd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#discard_local_ssd GoogleComputeInstance#discard_local_ssd}

---

### GoogleComputeInstanceScratchDisk <a name="GoogleComputeInstanceScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceScratchDisk: googleComputeInstance.GoogleComputeInstanceScratchDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.interface">interface</a></code> | <code>string</code> | The disk interface used for attaching this disk. One of SCSI or NVME. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.deviceName">deviceName</a></code> | <code>string</code> | Name with which the attached disk is accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.size">size</a></code> | <code>number</code> | The size of the disk in gigabytes. One of 375 or 3000. |

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

The disk interface used for attaching this disk. One of SCSI or NVME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#interface GoogleComputeInstance#interface}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Name with which the attached disk is accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#device_name GoogleComputeInstance#device_name}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

The size of the disk in gigabytes. One of 375 or 3000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#size GoogleComputeInstance#size}

---

### GoogleComputeInstanceServiceAccount <a name="GoogleComputeInstanceServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceServiceAccount: googleComputeInstance.GoogleComputeInstanceServiceAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount.property.scopes">scopes</a></code> | <code>string[]</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount.property.email">email</a></code> | <code>string</code> | The service account e-mail address. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

A list of service scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#scopes GoogleComputeInstance#scopes}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The service account e-mail address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#email GoogleComputeInstance#email}

---

### GoogleComputeInstanceShieldedInstanceConfig <a name="GoogleComputeInstanceShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceShieldedInstanceConfig: googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether integrity monitoring is enabled for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether secure boot is enabled for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the instance uses vTPM. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether integrity monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_integrity_monitoring GoogleComputeInstance#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether secure boot is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_secure_boot GoogleComputeInstance#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the instance uses vTPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_vtpm GoogleComputeInstance#enable_vtpm}

---

### GoogleComputeInstanceTimeouts <a name="GoogleComputeInstanceTimeouts" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

const googleComputeInstanceTimeouts: googleComputeInstance.GoogleComputeInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#create GoogleComputeInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#delete GoogleComputeInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#update GoogleComputeInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#create GoogleComputeInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#delete GoogleComputeInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#update GoogleComputeInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceAdvancedMachineFeaturesOutputReference <a name="GoogleComputeInstanceAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">resetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">resetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">resetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetTurboMode">resetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">resetVisibleCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableNestedVirtualization` <a name="resetEnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```typescript
public resetEnableNestedVirtualization(): void
```

##### `resetEnableUefiNetworking` <a name="resetEnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```typescript
public resetEnableUefiNetworking(): void
```

##### `resetPerformanceMonitoringUnit` <a name="resetPerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```typescript
public resetPerformanceMonitoringUnit(): void
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```typescript
public resetThreadsPerCore(): void
```

##### `resetTurboMode` <a name="resetTurboMode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```typescript
public resetTurboMode(): void
```

##### `resetVisibleCoreCount` <a name="resetVisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```typescript
public resetVisibleCoreCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">enableNestedVirtualizationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">enableUefiNetworkingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">performanceMonitoringUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboModeInput">turboModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">visibleCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboMode">turboMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visibleCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableNestedVirtualizationInput`<sup>Optional</sup> <a name="enableNestedVirtualizationInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```typescript
public readonly enableNestedVirtualizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUefiNetworkingInput`<sup>Optional</sup> <a name="enableUefiNetworkingInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```typescript
public readonly enableUefiNetworkingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `performanceMonitoringUnitInput`<sup>Optional</sup> <a name="performanceMonitoringUnitInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```typescript
public readonly performanceMonitoringUnitInput: string;
```

- *Type:* string

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```typescript
public readonly threadsPerCoreInput: number;
```

- *Type:* number

---

##### `turboModeInput`<sup>Optional</sup> <a name="turboModeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```typescript
public readonly turboModeInput: string;
```

- *Type:* string

---

##### `visibleCoreCountInput`<sup>Optional</sup> <a name="visibleCoreCountInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```typescript
public readonly visibleCoreCountInput: number;
```

- *Type:* number

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```typescript
public readonly enableNestedVirtualization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUefiNetworking`<sup>Required</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```typescript
public readonly enableUefiNetworking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `performanceMonitoringUnit`<sup>Required</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```typescript
public readonly performanceMonitoringUnit: string;
```

- *Type:* string

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

---

##### `turboMode`<sup>Required</sup> <a name="turboMode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```typescript
public readonly turboMode: string;
```

- *Type:* string

---

##### `visibleCoreCount`<sup>Required</sup> <a name="visibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```typescript
public readonly visibleCoreCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a>

---


### GoogleComputeInstanceAttachedDiskList <a name="GoogleComputeInstanceAttachedDiskList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceAttachedDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceAttachedDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk">GoogleComputeInstanceAttachedDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceAttachedDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk">GoogleComputeInstanceAttachedDisk</a>[]

---


### GoogleComputeInstanceAttachedDiskOutputReference <a name="GoogleComputeInstanceAttachedDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetDiskEncryptionKeyRaw">resetDiskEncryptionKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetDiskEncryptionKeyRaw` <a name="resetDiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetDiskEncryptionKeyRaw"></a>

```typescript
public resetDiskEncryptionKeyRaw(): void
```

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeySha256">diskEncryptionKeySha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRawInput">diskEncryptionKeyRawInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRaw">diskEncryptionKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk">GoogleComputeInstanceAttachedDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionKeySha256`<sup>Required</sup> <a name="diskEncryptionKeySha256" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeySha256"></a>

```typescript
public readonly diskEncryptionKeySha256: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `diskEncryptionKeyRawInput`<sup>Optional</sup> <a name="diskEncryptionKeyRawInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRawInput"></a>

```typescript
public readonly diskEncryptionKeyRawInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `diskEncryptionKeyRaw`<sup>Required</sup> <a name="diskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```typescript
public readonly diskEncryptionKeyRaw: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceAttachedDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk">GoogleComputeInstanceAttachedDisk</a>

---


### GoogleComputeInstanceBootDiskInitializeParamsOutputReference <a name="GoogleComputeInstanceBootDiskInitializeParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetEnableConfidentialCompute">resetEnableConfidentialCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetProvisionedIops">resetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetStoragePool">resetStoragePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableConfidentialCompute` <a name="resetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetEnableConfidentialCompute"></a>

```typescript
public resetEnableConfidentialCompute(): void
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProvisionedIops` <a name="resetProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetProvisionedIops"></a>

```typescript
public resetProvisionedIops(): void
```

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetProvisionedThroughput"></a>

```typescript
public resetProvisionedThroughput(): void
```

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetResourcePolicies"></a>

```typescript
public resetResourcePolicies(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetStoragePool` <a name="resetStoragePool" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetStoragePool"></a>

```typescript
public resetStoragePool(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialComputeInput">enableConfidentialComputeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIopsInput">provisionedIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePoolInput">storagePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIops">provisionedIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePool">storagePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableConfidentialComputeInput`<sup>Optional</sup> <a name="enableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialComputeInput"></a>

```typescript
public readonly enableConfidentialComputeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `provisionedIopsInput`<sup>Optional</sup> <a name="provisionedIopsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIopsInput"></a>

```typescript
public readonly provisionedIopsInput: number;
```

- *Type:* number

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughputInput"></a>

```typescript
public readonly provisionedThroughputInput: number;
```

- *Type:* number

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePoliciesInput"></a>

```typescript
public readonly resourcePoliciesInput: string[];
```

- *Type:* string[]

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `storagePoolInput`<sup>Optional</sup> <a name="storagePoolInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePoolInput"></a>

```typescript
public readonly storagePoolInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute"></a>

```typescript
public readonly enableConfidentialCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `provisionedIops`<sup>Required</sup> <a name="provisionedIops" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIops"></a>

```typescript
public readonly provisionedIops: number;
```

- *Type:* number

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: number;
```

- *Type:* number

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceBootDiskInitializeParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a>

---


### GoogleComputeInstanceBootDiskOutputReference <a name="GoogleComputeInstanceBootDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.putInitializeParams">putInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetDiskEncryptionKeyRaw">resetDiskEncryptionKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetInitializeParams">resetInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInitializeParams` <a name="putInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.putInitializeParams"></a>

```typescript
public putInitializeParams(value: GoogleComputeInstanceBootDiskInitializeParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetAutoDelete"></a>

```typescript
public resetAutoDelete(): void
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetDiskEncryptionKeyRaw` <a name="resetDiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetDiskEncryptionKeyRaw"></a>

```typescript
public resetDiskEncryptionKeyRaw(): void
```

##### `resetInitializeParams` <a name="resetInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetInitializeParams"></a>

```typescript
public resetInitializeParams(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetInterface"></a>

```typescript
public resetInterface(): void
```

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeySha256">diskEncryptionKeySha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.initializeParams">initializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference">GoogleComputeInstanceBootDiskInitializeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRawInput">diskEncryptionKeyRawInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.initializeParamsInput">initializeParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRaw">diskEncryptionKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionKeySha256`<sup>Required</sup> <a name="diskEncryptionKeySha256" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeySha256"></a>

```typescript
public readonly diskEncryptionKeySha256: string;
```

- *Type:* string

---

##### `initializeParams`<sup>Required</sup> <a name="initializeParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.initializeParams"></a>

```typescript
public readonly initializeParams: GoogleComputeInstanceBootDiskInitializeParamsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference">GoogleComputeInstanceBootDiskInitializeParamsOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.autoDeleteInput"></a>

```typescript
public readonly autoDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `diskEncryptionKeyRawInput`<sup>Optional</sup> <a name="diskEncryptionKeyRawInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRawInput"></a>

```typescript
public readonly diskEncryptionKeyRawInput: string;
```

- *Type:* string

---

##### `initializeParamsInput`<sup>Optional</sup> <a name="initializeParamsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.initializeParamsInput"></a>

```typescript
public readonly initializeParamsInput: GoogleComputeInstanceBootDiskInitializeParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a>

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `diskEncryptionKeyRaw`<sup>Required</sup> <a name="diskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```typescript
public readonly diskEncryptionKeyRaw: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceBootDisk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a>

---


### GoogleComputeInstanceConfidentialInstanceConfigOutputReference <a name="GoogleComputeInstanceConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">resetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">resetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidentialInstanceType` <a name="resetConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```typescript
public resetConfidentialInstanceType(): void
```

##### `resetEnableConfidentialCompute` <a name="resetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```typescript
public resetEnableConfidentialCompute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">confidentialInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enableConfidentialComputeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidentialInstanceTypeInput`<sup>Optional</sup> <a name="confidentialInstanceTypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```typescript
public readonly confidentialInstanceTypeInput: string;
```

- *Type:* string

---

##### `enableConfidentialComputeInput`<sup>Optional</sup> <a name="enableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```typescript
public readonly enableConfidentialComputeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialInstanceType`<sup>Required</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```typescript
public readonly confidentialInstanceType: string;
```

- *Type:* string

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```typescript
public readonly enableConfidentialCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a>

---


### GoogleComputeInstanceGuestAcceleratorList <a name="GoogleComputeInstanceGuestAcceleratorList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator">GoogleComputeInstanceGuestAccelerator</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator">GoogleComputeInstanceGuestAccelerator</a>[]

---


### GoogleComputeInstanceGuestAcceleratorOutputReference <a name="GoogleComputeInstanceGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator">GoogleComputeInstanceGuestAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceGuestAccelerator;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator">GoogleComputeInstanceGuestAccelerator</a>

---


### GoogleComputeInstanceNetworkInterfaceAccessConfigList <a name="GoogleComputeInstanceNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig">GoogleComputeInstanceNetworkInterfaceAccessConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceNetworkInterfaceAccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig">GoogleComputeInstanceNetworkInterfaceAccessConfig</a>[]

---


### GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference <a name="GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetNatIp">resetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">resetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName">resetPublicPtrDomainName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNatIp` <a name="resetNatIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```typescript
public resetNatIp(): void
```

##### `resetNetworkTier` <a name="resetNetworkTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```typescript
public resetNetworkTier(): void
```

##### `resetPublicPtrDomainName` <a name="resetPublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName"></a>

```typescript
public resetPublicPtrDomainName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIpInput">natIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput">publicPtrDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIp">natIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig">GoogleComputeInstanceNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

##### `natIpInput`<sup>Optional</sup> <a name="natIpInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```typescript
public readonly natIpInput: string;
```

- *Type:* string

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```typescript
public readonly networkTierInput: string;
```

- *Type:* string

---

##### `publicPtrDomainNameInput`<sup>Optional</sup> <a name="publicPtrDomainNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```typescript
public readonly publicPtrDomainNameInput: string;
```

- *Type:* string

---

##### `natIp`<sup>Required</sup> <a name="natIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```typescript
public readonly natIp: string;
```

- *Type:* string

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```typescript
public readonly publicPtrDomainName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceNetworkInterfaceAccessConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig">GoogleComputeInstanceNetworkInterfaceAccessConfig</a>

---


### GoogleComputeInstanceNetworkInterfaceAliasIpRangeList <a name="GoogleComputeInstanceNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange">GoogleComputeInstanceNetworkInterfaceAliasIpRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceNetworkInterfaceAliasIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange">GoogleComputeInstanceNetworkInterfaceAliasIpRange</a>[]

---


### GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference <a name="GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">resetSubnetworkRangeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetworkRangeName` <a name="resetSubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```typescript
public resetSubnetworkRangeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange">GoogleComputeInstanceNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```typescript
public readonly subnetworkRangeNameInput: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceNetworkInterfaceAliasIpRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange">GoogleComputeInstanceNetworkInterfaceAliasIpRange</a>

---


### GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList <a name="GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a>[]

---


### GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference <a name="GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6">resetExternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength">resetExternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName">resetPublicPtrDomainName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalIpv6` <a name="resetExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6"></a>

```typescript
public resetExternalIpv6(): void
```

##### `resetExternalIpv6PrefixLength` <a name="resetExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength"></a>

```typescript
public resetExternalIpv6PrefixLength(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPublicPtrDomainName` <a name="resetPublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName"></a>

```typescript
public resetPublicPtrDomainName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input">externalIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput">externalIpv6PrefixLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput">publicPtrDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">externalIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">externalIpv6PrefixLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

##### `externalIpv6Input`<sup>Optional</sup> <a name="externalIpv6Input" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input"></a>

```typescript
public readonly externalIpv6Input: string;
```

- *Type:* string

---

##### `externalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="externalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput"></a>

```typescript
public readonly externalIpv6PrefixLengthInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```typescript
public readonly networkTierInput: string;
```

- *Type:* string

---

##### `publicPtrDomainNameInput`<sup>Optional</sup> <a name="publicPtrDomainNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```typescript
public readonly publicPtrDomainNameInput: string;
```

- *Type:* string

---

##### `externalIpv6`<sup>Required</sup> <a name="externalIpv6" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```typescript
public readonly externalIpv6: string;
```

- *Type:* string

---

##### `externalIpv6PrefixLength`<sup>Required</sup> <a name="externalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```typescript
public readonly externalIpv6PrefixLength: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```typescript
public readonly publicPtrDomainName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a>

---


### GoogleComputeInstanceNetworkInterfaceList <a name="GoogleComputeInstanceNetworkInterfaceList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface">GoogleComputeInstanceNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface">GoogleComputeInstanceNetworkInterface</a>[]

---


### GoogleComputeInstanceNetworkInterfaceOutputReference <a name="GoogleComputeInstanceNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAliasIpRange">putAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putIpv6AccessConfig">putIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetAliasIpRange">resetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">resetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetIpv6AccessConfig">resetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetworkIp">resetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetQueueCount">resetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSubnetworkProject">resetSubnetworkProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAccessConfig"></a>

```typescript
public putAccessConfig(value: IResolvable | GoogleComputeInstanceNetworkInterfaceAccessConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig">GoogleComputeInstanceNetworkInterfaceAccessConfig</a>[]

---

##### `putAliasIpRange` <a name="putAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAliasIpRange"></a>

```typescript
public putAliasIpRange(value: IResolvable | GoogleComputeInstanceNetworkInterfaceAliasIpRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange">GoogleComputeInstanceNetworkInterfaceAliasIpRange</a>[]

---

##### `putIpv6AccessConfig` <a name="putIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```typescript
public putIpv6AccessConfig(value: IResolvable | GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a>[]

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetAccessConfig"></a>

```typescript
public resetAccessConfig(): void
```

##### `resetAliasIpRange` <a name="resetAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```typescript
public resetAliasIpRange(): void
```

##### `resetInternalIpv6PrefixLength` <a name="resetInternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```typescript
public resetInternalIpv6PrefixLength(): void
```

##### `resetIpv6AccessConfig` <a name="resetIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```typescript
public resetIpv6AccessConfig(): void
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetworkAttachment"></a>

```typescript
public resetNetworkAttachment(): void
```

##### `resetNetworkIp` <a name="resetNetworkIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetworkIp"></a>

```typescript
public resetNetworkIp(): void
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNicType"></a>

```typescript
public resetNicType(): void
```

##### `resetQueueCount` <a name="resetQueueCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetQueueCount"></a>

```typescript
public resetQueueCount(): void
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetStackType"></a>

```typescript
public resetStackType(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetSubnetworkProject` <a name="resetSubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```typescript
public resetSubnetworkProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList">GoogleComputeInstanceNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRange">aliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfigInput">accessConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig">GoogleComputeInstanceNetworkInterfaceAccessConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRangeInput">aliasIpRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange">GoogleComputeInstanceNetworkInterfaceAliasIpRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">internalIpv6PrefixLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">ipv6AccessConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIpInput">networkIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.nicTypeInput">nicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCountInput">queueCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.stackTypeInput">stackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProjectInput">subnetworkProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIp">networkIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.nicType">nicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCount">queueCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.stackType">stackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProject">subnetworkProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface">GoogleComputeInstanceNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfig"></a>

```typescript
public readonly accessConfig: GoogleComputeInstanceNetworkInterfaceAccessConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList">GoogleComputeInstanceNetworkInterfaceAccessConfigList</a>

---

##### `aliasIpRange`<sup>Required</sup> <a name="aliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```typescript
public readonly aliasIpRange: GoogleComputeInstanceNetworkInterfaceAliasIpRangeList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceNetworkInterfaceAliasIpRangeList</a>

---

##### `ipv6AccessConfig`<sup>Required</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```typescript
public readonly ipv6AccessConfig: GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```typescript
public readonly ipv6AccessType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```typescript
public readonly accessConfigInput: IResolvable | GoogleComputeInstanceNetworkInterfaceAccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig">GoogleComputeInstanceNetworkInterfaceAccessConfig</a>[]

---

##### `aliasIpRangeInput`<sup>Optional</sup> <a name="aliasIpRangeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```typescript
public readonly aliasIpRangeInput: IResolvable | GoogleComputeInstanceNetworkInterfaceAliasIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange">GoogleComputeInstanceNetworkInterfaceAliasIpRange</a>[]

---

##### `internalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="internalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```typescript
public readonly internalIpv6PrefixLengthInput: number;
```

- *Type:* number

---

##### `ipv6AccessConfigInput`<sup>Optional</sup> <a name="ipv6AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```typescript
public readonly ipv6AccessConfigInput: IResolvable | GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a>[]

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `networkIpInput`<sup>Optional</sup> <a name="networkIpInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIpInput"></a>

```typescript
public readonly networkIpInput: string;
```

- *Type:* string

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```typescript
public readonly nicTypeInput: string;
```

- *Type:* string

---

##### `queueCountInput`<sup>Optional</sup> <a name="queueCountInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCountInput"></a>

```typescript
public readonly queueCountInput: number;
```

- *Type:* number

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```typescript
public readonly stackTypeInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `subnetworkProjectInput`<sup>Optional</sup> <a name="subnetworkProjectInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```typescript
public readonly subnetworkProjectInput: string;
```

- *Type:* string

---

##### `internalIpv6PrefixLength`<sup>Required</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```typescript
public readonly internalIpv6PrefixLength: number;
```

- *Type:* number

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `networkIp`<sup>Required</sup> <a name="networkIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIp"></a>

```typescript
public readonly networkIp: string;
```

- *Type:* string

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

---

##### `queueCount`<sup>Required</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCount"></a>

```typescript
public readonly queueCount: number;
```

- *Type:* number

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `subnetworkProject`<sup>Required</sup> <a name="subnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```typescript
public readonly subnetworkProject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceNetworkInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface">GoogleComputeInstanceNetworkInterface</a>

---


### GoogleComputeInstanceNetworkPerformanceConfigOutputReference <a name="GoogleComputeInstanceNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">totalEgressBandwidthTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalEgressBandwidthTierInput`<sup>Optional</sup> <a name="totalEgressBandwidthTierInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```typescript
public readonly totalEgressBandwidthTierInput: string;
```

- *Type:* string

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```typescript
public readonly totalEgressBandwidthTier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a>

---


### GoogleComputeInstanceParamsOutputReference <a name="GoogleComputeInstanceParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceParams;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a>

---


### GoogleComputeInstanceReservationAffinityOutputReference <a name="GoogleComputeInstanceReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.putSpecificReservation">putSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.resetSpecificReservation">resetSpecificReservation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpecificReservation` <a name="putSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.putSpecificReservation"></a>

```typescript
public putSpecificReservation(value: GoogleComputeInstanceReservationAffinitySpecificReservation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a>

---

##### `resetSpecificReservation` <a name="resetSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.resetSpecificReservation"></a>

```typescript
public resetSpecificReservation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.specificReservationInput">specificReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.specificReservation"></a>

```typescript
public readonly specificReservation: GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference</a>

---

##### `specificReservationInput`<sup>Optional</sup> <a name="specificReservationInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.specificReservationInput"></a>

```typescript
public readonly specificReservationInput: GoogleComputeInstanceReservationAffinitySpecificReservation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a>

---


### GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference <a name="GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceReservationAffinitySpecificReservation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a>

---


### GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a>

---


### GoogleComputeInstanceSchedulingMaxRunDurationOutputReference <a name="GoogleComputeInstanceSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceSchedulingMaxRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a>

---


### GoogleComputeInstanceSchedulingNodeAffinitiesList <a name="GoogleComputeInstanceSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities">GoogleComputeInstanceSchedulingNodeAffinities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceSchedulingNodeAffinities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities">GoogleComputeInstanceSchedulingNodeAffinities</a>[]

---


### GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference <a name="GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities">GoogleComputeInstanceSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceSchedulingNodeAffinities;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities">GoogleComputeInstanceSchedulingNodeAffinities</a>

---


### GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference <a name="GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">resetDiscardLocalSsd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiscardLocalSsd` <a name="resetDiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```typescript
public resetDiscardLocalSsd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">discardLocalSsdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discardLocalSsd</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `discardLocalSsdInput`<sup>Optional</sup> <a name="discardLocalSsdInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```typescript
public readonly discardLocalSsdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discardLocalSsd`<sup>Required</sup> <a name="discardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```typescript
public readonly discardLocalSsd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceSchedulingOnInstanceStopAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a>

---


### GoogleComputeInstanceSchedulingOutputReference <a name="GoogleComputeInstanceSchedulingOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putLocalSsdRecoveryTimeout">putLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putMaxRunDuration">putMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putNodeAffinities">putNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putOnInstanceStopAction">putOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetAutomaticRestart">resetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetHostErrorTimeoutSeconds">resetHostErrorTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetInstanceTerminationAction">resetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetLocalSsdRecoveryTimeout">resetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMaintenanceInterval">resetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMaxRunDuration">resetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMinNodeCpus">resetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetNodeAffinities">resetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetOnHostMaintenance">resetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetOnInstanceStopAction">resetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetPreemptible">resetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalSsdRecoveryTimeout` <a name="putLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```typescript
public putLocalSsdRecoveryTimeout(value: GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a>

---

##### `putMaxRunDuration` <a name="putMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putMaxRunDuration"></a>

```typescript
public putMaxRunDuration(value: GoogleComputeInstanceSchedulingMaxRunDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a>

---

##### `putNodeAffinities` <a name="putNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putNodeAffinities"></a>

```typescript
public putNodeAffinities(value: IResolvable | GoogleComputeInstanceSchedulingNodeAffinities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities">GoogleComputeInstanceSchedulingNodeAffinities</a>[]

---

##### `putOnInstanceStopAction` <a name="putOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putOnInstanceStopAction"></a>

```typescript
public putOnInstanceStopAction(value: GoogleComputeInstanceSchedulingOnInstanceStopAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a>

---

##### `resetAutomaticRestart` <a name="resetAutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetAutomaticRestart"></a>

```typescript
public resetAutomaticRestart(): void
```

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetHostErrorTimeoutSeconds` <a name="resetHostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetHostErrorTimeoutSeconds"></a>

```typescript
public resetHostErrorTimeoutSeconds(): void
```

##### `resetInstanceTerminationAction` <a name="resetInstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetInstanceTerminationAction"></a>

```typescript
public resetInstanceTerminationAction(): void
```

##### `resetLocalSsdRecoveryTimeout` <a name="resetLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```typescript
public resetLocalSsdRecoveryTimeout(): void
```

##### `resetMaintenanceInterval` <a name="resetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMaintenanceInterval"></a>

```typescript
public resetMaintenanceInterval(): void
```

##### `resetMaxRunDuration` <a name="resetMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMaxRunDuration"></a>

```typescript
public resetMaxRunDuration(): void
```

##### `resetMinNodeCpus` <a name="resetMinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMinNodeCpus"></a>

```typescript
public resetMinNodeCpus(): void
```

##### `resetNodeAffinities` <a name="resetNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetNodeAffinities"></a>

```typescript
public resetNodeAffinities(): void
```

##### `resetOnHostMaintenance` <a name="resetOnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetOnHostMaintenance"></a>

```typescript
public resetOnHostMaintenance(): void
```

##### `resetOnInstanceStopAction` <a name="resetOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetOnInstanceStopAction"></a>

```typescript
public resetOnInstanceStopAction(): void
```

##### `resetPreemptible` <a name="resetPreemptible" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetPreemptible"></a>

```typescript
public resetPreemptible(): void
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetProvisioningModel"></a>

```typescript
public resetProvisioningModel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.nodeAffinities">nodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList">GoogleComputeInstanceSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.automaticRestartInput">automaticRestartInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSecondsInput">hostErrorTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationActionInput">instanceTerminationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">localSsdRecoveryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maintenanceIntervalInput">maintenanceIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maxRunDurationInput">maxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.minNodeCpusInput">minNodeCpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.nodeAffinitiesInput">nodeAffinitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities">GoogleComputeInstanceSchedulingNodeAffinities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenanceInput">onHostMaintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopActionInput">onInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.preemptibleInput">preemptibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.provisioningModelInput">provisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.automaticRestart">automaticRestart</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSeconds">hostErrorTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maintenanceInterval">maintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.minNodeCpus">minNodeCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenance">onHostMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localSsdRecoveryTimeout`<sup>Required</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```typescript
public readonly localSsdRecoveryTimeout: GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference</a>

---

##### `maxRunDuration`<sup>Required</sup> <a name="maxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maxRunDuration"></a>

```typescript
public readonly maxRunDuration: GoogleComputeInstanceSchedulingMaxRunDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceSchedulingMaxRunDurationOutputReference</a>

---

##### `nodeAffinities`<sup>Required</sup> <a name="nodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.nodeAffinities"></a>

```typescript
public readonly nodeAffinities: GoogleComputeInstanceSchedulingNodeAffinitiesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList">GoogleComputeInstanceSchedulingNodeAffinitiesList</a>

---

##### `onInstanceStopAction`<sup>Required</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopAction"></a>

```typescript
public readonly onInstanceStopAction: GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference</a>

---

##### `automaticRestartInput`<sup>Optional</sup> <a name="automaticRestartInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.automaticRestartInput"></a>

```typescript
public readonly automaticRestartInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: number;
```

- *Type:* number

---

##### `hostErrorTimeoutSecondsInput`<sup>Optional</sup> <a name="hostErrorTimeoutSecondsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSecondsInput"></a>

```typescript
public readonly hostErrorTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `instanceTerminationActionInput`<sup>Optional</sup> <a name="instanceTerminationActionInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```typescript
public readonly instanceTerminationActionInput: string;
```

- *Type:* string

---

##### `localSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="localSsdRecoveryTimeoutInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```typescript
public readonly localSsdRecoveryTimeoutInput: GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a>

---

##### `maintenanceIntervalInput`<sup>Optional</sup> <a name="maintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maintenanceIntervalInput"></a>

```typescript
public readonly maintenanceIntervalInput: string;
```

- *Type:* string

---

##### `maxRunDurationInput`<sup>Optional</sup> <a name="maxRunDurationInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maxRunDurationInput"></a>

```typescript
public readonly maxRunDurationInput: GoogleComputeInstanceSchedulingMaxRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a>

---

##### `minNodeCpusInput`<sup>Optional</sup> <a name="minNodeCpusInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.minNodeCpusInput"></a>

```typescript
public readonly minNodeCpusInput: number;
```

- *Type:* number

---

##### `nodeAffinitiesInput`<sup>Optional</sup> <a name="nodeAffinitiesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```typescript
public readonly nodeAffinitiesInput: IResolvable | GoogleComputeInstanceSchedulingNodeAffinities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities">GoogleComputeInstanceSchedulingNodeAffinities</a>[]

---

##### `onHostMaintenanceInput`<sup>Optional</sup> <a name="onHostMaintenanceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```typescript
public readonly onHostMaintenanceInput: string;
```

- *Type:* string

---

##### `onInstanceStopActionInput`<sup>Optional</sup> <a name="onInstanceStopActionInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```typescript
public readonly onInstanceStopActionInput: GoogleComputeInstanceSchedulingOnInstanceStopAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a>

---

##### `preemptibleInput`<sup>Optional</sup> <a name="preemptibleInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.preemptibleInput"></a>

```typescript
public readonly preemptibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.provisioningModelInput"></a>

```typescript
public readonly provisioningModelInput: string;
```

- *Type:* string

---

##### `automaticRestart`<sup>Required</sup> <a name="automaticRestart" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.automaticRestart"></a>

```typescript
public readonly automaticRestart: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: number;
```

- *Type:* number

---

##### `hostErrorTimeoutSeconds`<sup>Required</sup> <a name="hostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```typescript
public readonly hostErrorTimeoutSeconds: number;
```

- *Type:* number

---

##### `instanceTerminationAction`<sup>Required</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationAction"></a>

```typescript
public readonly instanceTerminationAction: string;
```

- *Type:* string

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maintenanceInterval"></a>

```typescript
public readonly maintenanceInterval: string;
```

- *Type:* string

---

##### `minNodeCpus`<sup>Required</sup> <a name="minNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.minNodeCpus"></a>

```typescript
public readonly minNodeCpus: number;
```

- *Type:* number

---

##### `onHostMaintenance`<sup>Required</sup> <a name="onHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenance"></a>

```typescript
public readonly onHostMaintenance: string;
```

- *Type:* string

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.preemptible"></a>

```typescript
public readonly preemptible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceScheduling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a>

---


### GoogleComputeInstanceScratchDiskList <a name="GoogleComputeInstanceScratchDiskList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceScratchDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceScratchDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk">GoogleComputeInstanceScratchDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceScratchDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk">GoogleComputeInstanceScratchDisk</a>[]

---


### GoogleComputeInstanceScratchDiskOutputReference <a name="GoogleComputeInstanceScratchDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk">GoogleComputeInstanceScratchDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceScratchDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk">GoogleComputeInstanceScratchDisk</a>

---


### GoogleComputeInstanceServiceAccountOutputReference <a name="GoogleComputeInstanceServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a>

---


### GoogleComputeInstanceShieldedInstanceConfigOutputReference <a name="GoogleComputeInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```typescript
public resetEnableVtpm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```typescript
public readonly enableVtpmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a>

---


### GoogleComputeInstanceTimeoutsOutputReference <a name="GoogleComputeInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeInstance } from '@cdktf/provider-google-beta'

new googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts">GoogleComputeInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts">GoogleComputeInstanceTimeouts</a>

---



