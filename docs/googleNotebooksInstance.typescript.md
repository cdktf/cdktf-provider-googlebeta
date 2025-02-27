# `googleNotebooksInstance` Submodule <a name="`googleNotebooksInstance` Submodule" id="@cdktf/provider-google-beta.googleNotebooksInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNotebooksInstance <a name="GoogleNotebooksInstance" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance google_notebooks_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

new googleNotebooksInstance.GoogleNotebooksInstance(scope: Construct, id: string, config: GoogleNotebooksInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig">GoogleNotebooksInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig">GoogleNotebooksInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putAcceleratorConfig">putAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage">putVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetAcceleratorConfig">resetAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskType">resetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCustomGpuDriverPath">resetCustomGpuDriverPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskSizeGb">resetDataDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskType">resetDataDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstallGpuDriver">resetInstallGpuDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstanceOwners">resetInstanceOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoProxyAccess">resetNoProxyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoPublicIp">resetNoPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoRemoveDataDisk">resetNoRemoveDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetPostStartupScript">resetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccountScopes">resetServiceAccountScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetUpdateTime">resetUpdateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetVmImage">resetVmImage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAcceleratorConfig` <a name="putAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putAcceleratorConfig"></a>

```typescript
public putAcceleratorConfig(value: GoogleNotebooksInstanceAcceleratorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putAcceleratorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putContainerImage"></a>

```typescript
public putContainerImage(value: GoogleNotebooksInstanceContainerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity"></a>

```typescript
public putReservationAffinity(value: GoogleNotebooksInstanceReservationAffinity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: GoogleNotebooksInstanceShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNotebooksInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>

---

##### `putVmImage` <a name="putVmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage"></a>

```typescript
public putVmImage(value: GoogleNotebooksInstanceVmImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

---

##### `resetAcceleratorConfig` <a name="resetAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetAcceleratorConfig"></a>

```typescript
public resetAcceleratorConfig(): void
```

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskSizeGb"></a>

```typescript
public resetBootDiskSizeGb(): void
```

##### `resetBootDiskType` <a name="resetBootDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskType"></a>

```typescript
public resetBootDiskType(): void
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCreateTime"></a>

```typescript
public resetCreateTime(): void
```

##### `resetCustomGpuDriverPath` <a name="resetCustomGpuDriverPath" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCustomGpuDriverPath"></a>

```typescript
public resetCustomGpuDriverPath(): void
```

##### `resetDataDiskSizeGb` <a name="resetDataDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskSizeGb"></a>

```typescript
public resetDataDiskSizeGb(): void
```

##### `resetDataDiskType` <a name="resetDataDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskType"></a>

```typescript
public resetDataDiskType(): void
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDiskEncryption"></a>

```typescript
public resetDiskEncryption(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallGpuDriver` <a name="resetInstallGpuDriver" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstallGpuDriver"></a>

```typescript
public resetInstallGpuDriver(): void
```

##### `resetInstanceOwners` <a name="resetInstanceOwners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstanceOwners"></a>

```typescript
public resetInstanceOwners(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNicType"></a>

```typescript
public resetNicType(): void
```

##### `resetNoProxyAccess` <a name="resetNoProxyAccess" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoProxyAccess"></a>

```typescript
public resetNoProxyAccess(): void
```

##### `resetNoPublicIp` <a name="resetNoPublicIp" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoPublicIp"></a>

```typescript
public resetNoPublicIp(): void
```

##### `resetNoRemoveDataDisk` <a name="resetNoRemoveDataDisk" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoRemoveDataDisk"></a>

```typescript
public resetNoRemoveDataDisk(): void
```

##### `resetPostStartupScript` <a name="resetPostStartupScript" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetPostStartupScript"></a>

```typescript
public resetPostStartupScript(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetReservationAffinity"></a>

```typescript
public resetReservationAffinity(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetServiceAccountScopes` <a name="resetServiceAccountScopes" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccountScopes"></a>

```typescript
public resetServiceAccountScopes(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetSubnet"></a>

```typescript
public resetSubnet(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateTime` <a name="resetUpdateTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetUpdateTime"></a>

```typescript
public resetUpdateTime(): void
```

##### `resetVmImage` <a name="resetVmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetVmImage"></a>

```typescript
public resetVmImage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNotebooksInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isConstruct"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

googleNotebooksInstance.GoogleNotebooksInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformElement"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

googleNotebooksInstance.GoogleNotebooksInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformResource"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

googleNotebooksInstance.GoogleNotebooksInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNotebooksInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNotebooksInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNotebooksInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNotebooksInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfig">acceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference">GoogleNotebooksInstanceAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference">GoogleNotebooksInstanceContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.proxyUri">proxyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference">GoogleNotebooksInstanceReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference">GoogleNotebooksInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference">GoogleNotebooksInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference">GoogleNotebooksInstanceVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfigInput">acceleratorConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskTypeInput">bootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTimeInput">createTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPathInput">customGpuDriverPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGbInput">dataDiskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskTypeInput">dataDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriverInput">installGpuDriverInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwnersInput">instanceOwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicTypeInput">nicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccessInput">noProxyAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIpInput">noPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDiskInput">noRemoveDataDiskInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScriptInput">postStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopesInput">serviceAccountScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTimeInput">updateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImageInput">vmImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskType">bootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPath">customGpuDriverPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskType">dataDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriver">installGpuDriver</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwners">instanceOwners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicType">nicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccess">noProxyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIp">noPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDisk">noRemoveDataDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScript">postStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopes">serviceAccountScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acceleratorConfig`<sup>Required</sup> <a name="acceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfig"></a>

```typescript
public readonly acceleratorConfig: GoogleNotebooksInstanceAcceleratorConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference">GoogleNotebooksInstanceAcceleratorConfigOutputReference</a>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImage"></a>

```typescript
public readonly containerImage: GoogleNotebooksInstanceContainerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference">GoogleNotebooksInstanceContainerImageOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `proxyUri`<sup>Required</sup> <a name="proxyUri" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.proxyUri"></a>

```typescript
public readonly proxyUri: string;
```

- *Type:* string

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: GoogleNotebooksInstanceReservationAffinityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference">GoogleNotebooksInstanceReservationAffinityOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleNotebooksInstanceShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference">GoogleNotebooksInstanceShieldedInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNotebooksInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference">GoogleNotebooksInstanceTimeoutsOutputReference</a>

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImage"></a>

```typescript
public readonly vmImage: GoogleNotebooksInstanceVmImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference">GoogleNotebooksInstanceVmImageOutputReference</a>

---

##### `acceleratorConfigInput`<sup>Optional</sup> <a name="acceleratorConfigInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfigInput"></a>

```typescript
public readonly acceleratorConfigInput: GoogleNotebooksInstanceAcceleratorConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGbInput"></a>

```typescript
public readonly bootDiskSizeGbInput: number;
```

- *Type:* number

---

##### `bootDiskTypeInput`<sup>Optional</sup> <a name="bootDiskTypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskTypeInput"></a>

```typescript
public readonly bootDiskTypeInput: string;
```

- *Type:* string

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: GoogleNotebooksInstanceContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTimeInput"></a>

```typescript
public readonly createTimeInput: string;
```

- *Type:* string

---

##### `customGpuDriverPathInput`<sup>Optional</sup> <a name="customGpuDriverPathInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPathInput"></a>

```typescript
public readonly customGpuDriverPathInput: string;
```

- *Type:* string

---

##### `dataDiskSizeGbInput`<sup>Optional</sup> <a name="dataDiskSizeGbInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGbInput"></a>

```typescript
public readonly dataDiskSizeGbInput: number;
```

- *Type:* number

---

##### `dataDiskTypeInput`<sup>Optional</sup> <a name="dataDiskTypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskTypeInput"></a>

```typescript
public readonly dataDiskTypeInput: string;
```

- *Type:* string

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryptionInput"></a>

```typescript
public readonly diskEncryptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installGpuDriverInput`<sup>Optional</sup> <a name="installGpuDriverInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriverInput"></a>

```typescript
public readonly installGpuDriverInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceOwnersInput`<sup>Optional</sup> <a name="instanceOwnersInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwnersInput"></a>

```typescript
public readonly instanceOwnersInput: string[];
```

- *Type:* string[]

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicTypeInput"></a>

```typescript
public readonly nicTypeInput: string;
```

- *Type:* string

---

##### `noProxyAccessInput`<sup>Optional</sup> <a name="noProxyAccessInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccessInput"></a>

```typescript
public readonly noProxyAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noPublicIpInput`<sup>Optional</sup> <a name="noPublicIpInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIpInput"></a>

```typescript
public readonly noPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noRemoveDataDiskInput`<sup>Optional</sup> <a name="noRemoveDataDiskInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDiskInput"></a>

```typescript
public readonly noRemoveDataDiskInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `postStartupScriptInput`<sup>Optional</sup> <a name="postStartupScriptInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScriptInput"></a>

```typescript
public readonly postStartupScriptInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinityInput"></a>

```typescript
public readonly reservationAffinityInput: GoogleNotebooksInstanceReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `serviceAccountScopesInput`<sup>Optional</sup> <a name="serviceAccountScopesInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopesInput"></a>

```typescript
public readonly serviceAccountScopesInput: string[];
```

- *Type:* string[]

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: GoogleNotebooksInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNotebooksInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>

---

##### `updateTimeInput`<sup>Optional</sup> <a name="updateTimeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTimeInput"></a>

```typescript
public readonly updateTimeInput: string;
```

- *Type:* string

---

##### `vmImageInput`<sup>Optional</sup> <a name="vmImageInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImageInput"></a>

```typescript
public readonly vmImageInput: GoogleNotebooksInstanceVmImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

---

##### `bootDiskType`<sup>Required</sup> <a name="bootDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskType"></a>

```typescript
public readonly bootDiskType: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customGpuDriverPath`<sup>Required</sup> <a name="customGpuDriverPath" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPath"></a>

```typescript
public readonly customGpuDriverPath: string;
```

- *Type:* string

---

##### `dataDiskSizeGb`<sup>Required</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGb"></a>

```typescript
public readonly dataDiskSizeGb: number;
```

- *Type:* number

---

##### `dataDiskType`<sup>Required</sup> <a name="dataDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskType"></a>

```typescript
public readonly dataDiskType: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installGpuDriver`<sup>Required</sup> <a name="installGpuDriver" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriver"></a>

```typescript
public readonly installGpuDriver: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceOwners`<sup>Required</sup> <a name="instanceOwners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwners"></a>

```typescript
public readonly instanceOwners: string[];
```

- *Type:* string[]

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

---

##### `noProxyAccess`<sup>Required</sup> <a name="noProxyAccess" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccess"></a>

```typescript
public readonly noProxyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noPublicIp`<sup>Required</sup> <a name="noPublicIp" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIp"></a>

```typescript
public readonly noPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noRemoveDataDisk`<sup>Required</sup> <a name="noRemoveDataDisk" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDisk"></a>

```typescript
public readonly noRemoveDataDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `postStartupScript`<sup>Required</sup> <a name="postStartupScript" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScript"></a>

```typescript
public readonly postStartupScript: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `serviceAccountScopes`<sup>Required</sup> <a name="serviceAccountScopes" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopes"></a>

```typescript
public readonly serviceAccountScopes: string[];
```

- *Type:* string[]

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNotebooksInstanceAcceleratorConfig <a name="GoogleNotebooksInstanceAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

const googleNotebooksInstanceAcceleratorConfig: googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.coreCount">coreCount</a></code> | <code>number</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.type">type</a></code> | <code>string</code> | Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"]. |

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#core_count GoogleNotebooksInstance#core_count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#type GoogleNotebooksInstance#type}

---

### GoogleNotebooksInstanceConfig <a name="GoogleNotebooksInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

const googleNotebooksInstanceConfig: googleNotebooksInstance.GoogleNotebooksInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.location">location</a></code> | <code>string</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.machineType">machineType</a></code> | <code>string</code> | A reference to a machine type which defines VM kind. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.name">name</a></code> | <code>string</code> | The name specified for the Notebook instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.acceleratorConfig">acceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskType">bootDiskType</a></code> | <code>string</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.createTime">createTime</a></code> | <code>string</code> | Instance creation time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.customGpuDriverPath">customGpuDriverPath</a></code> | <code>string</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>number</code> | The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskType">dataDiskType</a></code> | <code>string</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Desired state of the Notebook Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#id GoogleNotebooksInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.installGpuDriver">installGpuDriver</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the end user authorizes Google Cloud to install GPU driver on this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.instanceOwners">instanceOwners</a></code> | <code>string[]</code> | The list of owners of this instance after creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.network">network</a></code> | <code>string</code> | The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.nicType">nicType</a></code> | <code>string</code> | The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noProxyAccess">noProxyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | The notebook instance will not register with the proxy.. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noPublicIp">noPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | No public IP will be assigned to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noRemoveDataDisk">noRemoveDataDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the data disk will not be auto deleted when deleting the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.postStartupScript">postStartupScript</a></code> | <code>string</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The service account on this instance, giving access to other Google Cloud services. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccountScopes">serviceAccountScopes</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.subnet">subnet</a></code> | <code>string</code> | The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.tags">tags</a></code> | <code>string[]</code> | The Compute Engine tags to add to instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.updateTime">updateTime</a></code> | <code>string</code> | Instance update time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a></code> | vm_image block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#location GoogleNotebooksInstance#location}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

A reference to a machine type which defines VM kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#machine_type GoogleNotebooksInstance#machine_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name specified for the Notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#name GoogleNotebooksInstance#name}

---

##### `acceleratorConfig`<sup>Optional</sup> <a name="acceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.acceleratorConfig"></a>

```typescript
public readonly acceleratorConfig: GoogleNotebooksInstanceAcceleratorConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#accelerator_config GoogleNotebooksInstance#accelerator_config}

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

The minimum recommended value is 100 GB.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#boot_disk_size_gb GoogleNotebooksInstance#boot_disk_size_gb}

---

##### `bootDiskType`<sup>Optional</sup> <a name="bootDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskType"></a>

```typescript
public readonly bootDiskType: string;
```

- *Type:* string

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#boot_disk_type GoogleNotebooksInstance#boot_disk_type}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.containerImage"></a>

```typescript
public readonly containerImage: GoogleNotebooksInstanceContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#container_image GoogleNotebooksInstance#container_image}

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

Instance creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#create_time GoogleNotebooksInstance#create_time}

---

##### `customGpuDriverPath`<sup>Optional</sup> <a name="customGpuDriverPath" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.customGpuDriverPath"></a>

```typescript
public readonly customGpuDriverPath: string;
```

- *Type:* string

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#custom_gpu_driver_path GoogleNotebooksInstance#custom_gpu_driver_path}

---

##### `dataDiskSizeGb`<sup>Optional</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskSizeGb"></a>

```typescript
public readonly dataDiskSizeGb: number;
```

- *Type:* number

The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#data_disk_size_gb GoogleNotebooksInstance#data_disk_size_gb}

---

##### `dataDiskType`<sup>Optional</sup> <a name="dataDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskType"></a>

```typescript
public readonly dataDiskType: string;
```

- *Type:* string

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#data_disk_type GoogleNotebooksInstance#data_disk_type}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Desired state of the Notebook Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#desired_state GoogleNotebooksInstance#desired_state}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#disk_encryption GoogleNotebooksInstance#disk_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#id GoogleNotebooksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installGpuDriver`<sup>Optional</sup> <a name="installGpuDriver" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.installGpuDriver"></a>

```typescript
public readonly installGpuDriver: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the end user authorizes Google Cloud to install GPU driver on this instance.

If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#install_gpu_driver GoogleNotebooksInstance#install_gpu_driver}

---

##### `instanceOwners`<sup>Optional</sup> <a name="instanceOwners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.instanceOwners"></a>

```typescript
public readonly instanceOwners: string[];
```

- *Type:* string[]

The list of owners of this instance after creation.

Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#instance_owners GoogleNotebooksInstance#instance_owners}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#kms_key GoogleNotebooksInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this instance.

These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#labels GoogleNotebooksInstance#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom metadata to apply to this instance.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#metadata GoogleNotebooksInstance#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#network GoogleNotebooksInstance#network}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#nic_type GoogleNotebooksInstance#nic_type}

---

##### `noProxyAccess`<sup>Optional</sup> <a name="noProxyAccess" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noProxyAccess"></a>

```typescript
public readonly noProxyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The notebook instance will not register with the proxy..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#no_proxy_access GoogleNotebooksInstance#no_proxy_access}

---

##### `noPublicIp`<sup>Optional</sup> <a name="noPublicIp" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noPublicIp"></a>

```typescript
public readonly noPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

No public IP will be assigned to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#no_public_ip GoogleNotebooksInstance#no_public_ip}

---

##### `noRemoveDataDisk`<sup>Optional</sup> <a name="noRemoveDataDisk" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noRemoveDataDisk"></a>

```typescript
public readonly noRemoveDataDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the data disk will not be auto deleted when deleting the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#no_remove_data_disk GoogleNotebooksInstance#no_remove_data_disk}

---

##### `postStartupScript`<sup>Optional</sup> <a name="postStartupScript" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.postStartupScript"></a>

```typescript
public readonly postStartupScript: string;
```

- *Type:* string

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#post_startup_script GoogleNotebooksInstance#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}.

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: GoogleNotebooksInstanceReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#reservation_affinity GoogleNotebooksInstance#reservation_affinity}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The service account on this instance, giving access to other Google Cloud services.

You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#service_account GoogleNotebooksInstance#service_account}

---

##### `serviceAccountScopes`<sup>Optional</sup> <a name="serviceAccountScopes" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccountScopes"></a>

```typescript
public readonly serviceAccountScopes: string[];
```

- *Type:* string[]

Optional.

The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:
- https://www.googleapis.com/auth/cloud-platform
- https://www.googleapis.com/auth/userinfo.email

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#service_account_scopes GoogleNotebooksInstance#service_account_scopes}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleNotebooksInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#shielded_instance_config GoogleNotebooksInstance#shielded_instance_config}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#subnet GoogleNotebooksInstance#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The Compute Engine tags to add to instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#tags GoogleNotebooksInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNotebooksInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#timeouts GoogleNotebooksInstance#timeouts}

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

Instance update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#update_time GoogleNotebooksInstance#update_time}

---

##### `vmImage`<sup>Optional</sup> <a name="vmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.vmImage"></a>

```typescript
public readonly vmImage: GoogleNotebooksInstanceVmImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#vm_image GoogleNotebooksInstance#vm_image}

---

### GoogleNotebooksInstanceContainerImage <a name="GoogleNotebooksInstanceContainerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

const googleNotebooksInstanceContainerImage: googleNotebooksInstance.GoogleNotebooksInstanceContainerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.repository">repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.tag">tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#repository GoogleNotebooksInstance#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#tag GoogleNotebooksInstance#tag}

---

### GoogleNotebooksInstanceReservationAffinity <a name="GoogleNotebooksInstanceReservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

const googleNotebooksInstanceReservationAffinity: googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.consumeReservationType">consumeReservationType</a></code> | <code>string</code> | The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.key">key</a></code> | <code>string</code> | Corresponds to the label key of reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.values">values</a></code> | <code>string[]</code> | Corresponds to the label values of reservation resource. |

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.consumeReservationType"></a>

```typescript
public readonly consumeReservationType: string;
```

- *Type:* string

The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#consume_reservation_type GoogleNotebooksInstance#consume_reservation_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#key GoogleNotebooksInstance#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#values GoogleNotebooksInstance#values}

---

### GoogleNotebooksInstanceShieldedInstanceConfig <a name="GoogleNotebooksInstanceShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

const googleNotebooksInstanceShieldedInstanceConfig: googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#enable_integrity_monitoring GoogleNotebooksInstance#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#enable_secure_boot GoogleNotebooksInstance#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#enable_vtpm GoogleNotebooksInstance#enable_vtpm}

---

### GoogleNotebooksInstanceTimeouts <a name="GoogleNotebooksInstanceTimeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

const googleNotebooksInstanceTimeouts: googleNotebooksInstance.GoogleNotebooksInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#create GoogleNotebooksInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#delete GoogleNotebooksInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#update GoogleNotebooksInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#create GoogleNotebooksInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#delete GoogleNotebooksInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#update GoogleNotebooksInstance#update}.

---

### GoogleNotebooksInstanceVmImage <a name="GoogleNotebooksInstanceVmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

const googleNotebooksInstanceVmImage: googleNotebooksInstance.GoogleNotebooksInstanceVmImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.project">project</a></code> | <code>string</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageFamily">imageFamily</a></code> | <code>string</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageName">imageName</a></code> | <code>string</code> | Use VM image name to find the image. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}

---

##### `imageFamily`<sup>Optional</sup> <a name="imageFamily" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageFamily"></a>

```typescript
public readonly imageFamily: string;
```

- *Type:* string

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#image_family GoogleNotebooksInstance#image_family}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_notebooks_instance#image_name GoogleNotebooksInstance#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNotebooksInstanceAcceleratorConfigOutputReference <a name="GoogleNotebooksInstanceAcceleratorConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

new googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput">coreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCount">coreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput"></a>

```typescript
public readonly coreCountInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNotebooksInstanceAcceleratorConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

---


### GoogleNotebooksInstanceContainerImageOutputReference <a name="GoogleNotebooksInstanceContainerImageOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

new googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNotebooksInstanceContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

---


### GoogleNotebooksInstanceReservationAffinityOutputReference <a name="GoogleNotebooksInstanceReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

new googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput">consumeReservationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType">consumeReservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumeReservationTypeInput`<sup>Optional</sup> <a name="consumeReservationTypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```typescript
public readonly consumeReservationTypeInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType"></a>

```typescript
public readonly consumeReservationType: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNotebooksInstanceReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

---


### GoogleNotebooksInstanceShieldedInstanceConfigOutputReference <a name="GoogleNotebooksInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

new googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```typescript
public resetEnableVtpm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```typescript
public readonly enableVtpmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNotebooksInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

---


### GoogleNotebooksInstanceTimeoutsOutputReference <a name="GoogleNotebooksInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

new googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNotebooksInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>

---


### GoogleNotebooksInstanceVmImageOutputReference <a name="GoogleNotebooksInstanceVmImageOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer"></a>

```typescript
import { googleNotebooksInstance } from '@cdktf/provider-google-beta'

new googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageFamily">resetImageFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageName">resetImageName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageFamily` <a name="resetImageFamily" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageFamily"></a>

```typescript
public resetImageFamily(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageName"></a>

```typescript
public resetImageName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamilyInput">imageFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamily">imageFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageFamilyInput`<sup>Optional</sup> <a name="imageFamilyInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamilyInput"></a>

```typescript
public readonly imageFamilyInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `imageFamily`<sup>Required</sup> <a name="imageFamily" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamily"></a>

```typescript
public readonly imageFamily: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNotebooksInstanceVmImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

---



