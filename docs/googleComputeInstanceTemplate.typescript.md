# `googleComputeInstanceTemplate` Submodule <a name="`googleComputeInstanceTemplate` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceTemplate <a name="GoogleComputeInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template google_compute_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplate(scope: Construct, id: string, config: GoogleComputeInstanceTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig">GoogleComputeInstanceTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig">GoogleComputeInstanceTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures">putAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putConfidentialInstanceConfig">putConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putGuestAccelerator">putGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkPerformanceConfig">putNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putServiceAccount">putServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetAdvancedMachineFeatures">resetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetCanIpForward">resetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetConfidentialInstanceConfig">resetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetEnableDisplay">resetEnableDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetGuestAccelerator">resetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetInstanceDescription">resetInstanceDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetKeyRevocationActionType">resetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadataStartupScript">resetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkPerformanceConfig">resetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetPartnerMetadata">resetPartnerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedMachineFeatures` <a name="putAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures"></a>

```typescript
public putAdvancedMachineFeatures(value: GoogleComputeInstanceTemplateAdvancedMachineFeatures): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

---

##### `putConfidentialInstanceConfig` <a name="putConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putConfidentialInstanceConfig"></a>

```typescript
public putConfidentialInstanceConfig(value: GoogleComputeInstanceTemplateConfidentialInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

---

##### `putDisk` <a name="putDisk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putDisk"></a>

```typescript
public putDisk(value: IResolvable | GoogleComputeInstanceTemplateDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>[]

---

##### `putGuestAccelerator` <a name="putGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putGuestAccelerator"></a>

```typescript
public putGuestAccelerator(value: IResolvable | GoogleComputeInstanceTemplateGuestAccelerator[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>[]

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | GoogleComputeInstanceTemplateNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>[]

---

##### `putNetworkPerformanceConfig` <a name="putNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkPerformanceConfig"></a>

```typescript
public putNetworkPerformanceConfig(value: GoogleComputeInstanceTemplateNetworkPerformanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putReservationAffinity"></a>

```typescript
public putReservationAffinity(value: GoogleComputeInstanceTemplateReservationAffinity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

---

##### `putScheduling` <a name="putScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling"></a>

```typescript
public putScheduling(value: GoogleComputeInstanceTemplateScheduling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

---

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putServiceAccount"></a>

```typescript
public putServiceAccount(value: GoogleComputeInstanceTemplateServiceAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: GoogleComputeInstanceTemplateShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeInstanceTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>

---

##### `resetAdvancedMachineFeatures` <a name="resetAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetAdvancedMachineFeatures"></a>

```typescript
public resetAdvancedMachineFeatures(): void
```

##### `resetCanIpForward` <a name="resetCanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetCanIpForward"></a>

```typescript
public resetCanIpForward(): void
```

##### `resetConfidentialInstanceConfig` <a name="resetConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetConfidentialInstanceConfig"></a>

```typescript
public resetConfidentialInstanceConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableDisplay` <a name="resetEnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetEnableDisplay"></a>

```typescript
public resetEnableDisplay(): void
```

##### `resetGuestAccelerator` <a name="resetGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetGuestAccelerator"></a>

```typescript
public resetGuestAccelerator(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceDescription` <a name="resetInstanceDescription" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetInstanceDescription"></a>

```typescript
public resetInstanceDescription(): void
```

##### `resetKeyRevocationActionType` <a name="resetKeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetKeyRevocationActionType"></a>

```typescript
public resetKeyRevocationActionType(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMetadataStartupScript` <a name="resetMetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMetadataStartupScript"></a>

```typescript
public resetMetadataStartupScript(): void
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetMinCpuPlatform"></a>

```typescript
public resetMinCpuPlatform(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkInterface"></a>

```typescript
public resetNetworkInterface(): void
```

##### `resetNetworkPerformanceConfig` <a name="resetNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetNetworkPerformanceConfig"></a>

```typescript
public resetNetworkPerformanceConfig(): void
```

##### `resetPartnerMetadata` <a name="resetPartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetPartnerMetadata"></a>

```typescript
public resetPartnerMetadata(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetReservationAffinity"></a>

```typescript
public resetReservationAffinity(): void
```

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetResourcePolicies"></a>

```typescript
public resetResourcePolicies(): void
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetScheduling"></a>

```typescript
public resetScheduling(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isConstruct"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformElement"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformResource"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInstanceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference">GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList">GoogleComputeInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAccelerator">guestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList">GoogleComputeInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataFingerprint">metadataFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList">GoogleComputeInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference">GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference">GoogleComputeInstanceTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference">GoogleComputeInstanceTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLinkUnique">selfLinkUnique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference">GoogleComputeInstanceTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference">GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsFingerprint">tagsFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference">GoogleComputeInstanceTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeaturesInput">advancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForwardInput">canIpForwardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfigInput">confidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.diskInput">diskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplayInput">enableDisplayInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAcceleratorInput">guestAcceleratorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescriptionInput">instanceDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionTypeInput">keyRevocationActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScriptInput">metadataStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfigInput">networkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadataInput">partnerMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForward">canIpForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplay">enableDisplay</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescription">instanceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScript">metadataStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadata">partnerMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeatures"></a>

```typescript
public readonly advancedMachineFeatures: GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `confidentialInstanceConfig`<sup>Required</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfig"></a>

```typescript
public readonly confidentialInstanceConfig: GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference">GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.disk"></a>

```typescript
public readonly disk: GoogleComputeInstanceTemplateDiskList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList">GoogleComputeInstanceTemplateDiskList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `guestAccelerator`<sup>Required</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAccelerator"></a>

```typescript
public readonly guestAccelerator: GoogleComputeInstanceTemplateGuestAcceleratorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList">GoogleComputeInstanceTemplateGuestAcceleratorList</a>

---

##### `metadataFingerprint`<sup>Required</sup> <a name="metadataFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataFingerprint"></a>

```typescript
public readonly metadataFingerprint: string;
```

- *Type:* string

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterface"></a>

```typescript
public readonly networkInterface: GoogleComputeInstanceTemplateNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList">GoogleComputeInstanceTemplateNetworkInterfaceList</a>

---

##### `networkPerformanceConfig`<sup>Required</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfig"></a>

```typescript
public readonly networkPerformanceConfig: GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference">GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: GoogleComputeInstanceTemplateReservationAffinityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference">GoogleComputeInstanceTemplateReservationAffinityOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.scheduling"></a>

```typescript
public readonly scheduling: GoogleComputeInstanceTemplateSchedulingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference">GoogleComputeInstanceTemplateSchedulingOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkUnique`<sup>Required</sup> <a name="selfLinkUnique" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.selfLinkUnique"></a>

```typescript
public readonly selfLinkUnique: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: GoogleComputeInstanceTemplateServiceAccountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference">GoogleComputeInstanceTemplateServiceAccountOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference">GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference</a>

---

##### `tagsFingerprint`<sup>Required</sup> <a name="tagsFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsFingerprint"></a>

```typescript
public readonly tagsFingerprint: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInstanceTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference">GoogleComputeInstanceTemplateTimeoutsOutputReference</a>

---

##### `advancedMachineFeaturesInput`<sup>Optional</sup> <a name="advancedMachineFeaturesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.advancedMachineFeaturesInput"></a>

```typescript
public readonly advancedMachineFeaturesInput: GoogleComputeInstanceTemplateAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

---

##### `canIpForwardInput`<sup>Optional</sup> <a name="canIpForwardInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForwardInput"></a>

```typescript
public readonly canIpForwardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialInstanceConfigInput`<sup>Optional</sup> <a name="confidentialInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.confidentialInstanceConfigInput"></a>

```typescript
public readonly confidentialInstanceConfigInput: GoogleComputeInstanceTemplateConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.diskInput"></a>

```typescript
public readonly diskInput: IResolvable | GoogleComputeInstanceTemplateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>[]

---

##### `enableDisplayInput`<sup>Optional</sup> <a name="enableDisplayInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplayInput"></a>

```typescript
public readonly enableDisplayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `guestAcceleratorInput`<sup>Optional</sup> <a name="guestAcceleratorInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.guestAcceleratorInput"></a>

```typescript
public readonly guestAcceleratorInput: IResolvable | GoogleComputeInstanceTemplateGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceDescriptionInput`<sup>Optional</sup> <a name="instanceDescriptionInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescriptionInput"></a>

```typescript
public readonly instanceDescriptionInput: string;
```

- *Type:* string

---

##### `keyRevocationActionTypeInput`<sup>Optional</sup> <a name="keyRevocationActionTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionTypeInput"></a>

```typescript
public readonly keyRevocationActionTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataStartupScriptInput`<sup>Optional</sup> <a name="metadataStartupScriptInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScriptInput"></a>

```typescript
public readonly metadataStartupScriptInput: string;
```

- *Type:* string

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatformInput"></a>

```typescript
public readonly minCpuPlatformInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | GoogleComputeInstanceTemplateNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>[]

---

##### `networkPerformanceConfigInput`<sup>Optional</sup> <a name="networkPerformanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.networkPerformanceConfigInput"></a>

```typescript
public readonly networkPerformanceConfigInput: GoogleComputeInstanceTemplateNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

---

##### `partnerMetadataInput`<sup>Optional</sup> <a name="partnerMetadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadataInput"></a>

```typescript
public readonly partnerMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.reservationAffinityInput"></a>

```typescript
public readonly reservationAffinityInput: GoogleComputeInstanceTemplateReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePoliciesInput"></a>

```typescript
public readonly resourcePoliciesInput: string[];
```

- *Type:* string[]

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.schedulingInput"></a>

```typescript
public readonly schedulingInput: GoogleComputeInstanceTemplateScheduling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: GoogleComputeInstanceTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: GoogleComputeInstanceTemplateShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeInstanceTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>

---

##### `canIpForward`<sup>Required</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.canIpForward"></a>

```typescript
public readonly canIpForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableDisplay`<sup>Required</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.enableDisplay"></a>

```typescript
public readonly enableDisplay: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceDescription`<sup>Required</sup> <a name="instanceDescription" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.instanceDescription"></a>

```typescript
public readonly instanceDescription: string;
```

- *Type:* string

---

##### `keyRevocationActionType`<sup>Required</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.keyRevocationActionType"></a>

```typescript
public readonly keyRevocationActionType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataStartupScript`<sup>Required</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.metadataStartupScript"></a>

```typescript
public readonly metadataStartupScript: string;
```

- *Type:* string

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `partnerMetadata`<sup>Required</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.partnerMetadata"></a>

```typescript
public readonly partnerMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceTemplateAdvancedMachineFeatures <a name="GoogleComputeInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateAdvancedMachineFeatures: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable UEFI networking or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>string</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.turboMode">turboMode</a></code> | <code>string</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount">visibleCoreCount</a></code> | <code>number</code> | The number of physical cores to expose to an instance. |

---

##### `enableNestedVirtualization`<sup>Optional</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```typescript
public readonly enableNestedVirtualization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#enable_nested_virtualization GoogleComputeInstanceTemplate#enable_nested_virtualization}

---

##### `enableUefiNetworking`<sup>Optional</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```typescript
public readonly enableUefiNetworking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable UEFI networking or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#enable_uefi_networking GoogleComputeInstanceTemplate#enable_uefi_networking}

---

##### `performanceMonitoringUnit`<sup>Optional</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```typescript
public readonly performanceMonitoringUnit: string;
```

- *Type:* string

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#performance_monitoring_unit GoogleComputeInstanceTemplate#performance_monitoring_unit}

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#threads_per_core GoogleComputeInstanceTemplate#threads_per_core}

---

##### `turboMode`<sup>Optional</sup> <a name="turboMode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.turboMode"></a>

```typescript
public readonly turboMode: string;
```

- *Type:* string

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#turbo_mode GoogleComputeInstanceTemplate#turbo_mode}

---

##### `visibleCoreCount`<sup>Optional</sup> <a name="visibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```typescript
public readonly visibleCoreCount: number;
```

- *Type:* number

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#visible_core_count GoogleComputeInstanceTemplate#visible_core_count}

---

### GoogleComputeInstanceTemplateConfidentialInstanceConfig <a name="GoogleComputeInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateConfidentialInstanceConfig: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>string</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `confidentialInstanceType`<sup>Optional</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```typescript
public readonly confidentialInstanceType: string;
```

- *Type:* string

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#confidential_instance_type GoogleComputeInstanceTemplate#confidential_instance_type}

---

##### `enableConfidentialCompute`<sup>Optional</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```typescript
public readonly enableConfidentialCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#enable_confidential_compute GoogleComputeInstanceTemplate#enable_confidential_compute}

---

### GoogleComputeInstanceTemplateConfig <a name="GoogleComputeInstanceTemplateConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateConfig: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.disk">disk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>[]</code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.machineType">machineType</a></code> | <code>string</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.canIpForward">canIpForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.description">description</a></code> | <code>string</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.enableDisplay">enableDisplay</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.guestAccelerator">guestAccelerator</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>[]</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#id GoogleComputeInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.instanceDescription">instanceDescription</a></code> | <code>string</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>string</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadataStartupScript">metadataStartupScript</a></code> | <code>string</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.name">name</a></code> | <code>string</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.partnerMetadata">partnerMetadata</a></code> | <code>{[ key: string ]: string}</code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.region">region</a></code> | <code>string</code> | An instance template is a global resource that is not bound to a zone or a region. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.disk"></a>

```typescript
public readonly disk: IResolvable | GoogleComputeInstanceTemplateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>[]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#disk GoogleComputeInstanceTemplate#disk}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#machine_type GoogleComputeInstanceTemplate#machine_type}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.advancedMachineFeatures"></a>

```typescript
public readonly advancedMachineFeatures: GoogleComputeInstanceTemplateAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#advanced_machine_features GoogleComputeInstanceTemplate#advanced_machine_features}

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.canIpForward"></a>

```typescript
public readonly canIpForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#can_ip_forward GoogleComputeInstanceTemplate#can_ip_forward}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.confidentialInstanceConfig"></a>

```typescript
public readonly confidentialInstanceConfig: GoogleComputeInstanceTemplateConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#confidential_instance_config GoogleComputeInstanceTemplate#confidential_instance_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#description GoogleComputeInstanceTemplate#description}

---

##### `enableDisplay`<sup>Optional</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.enableDisplay"></a>

```typescript
public readonly enableDisplay: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#enable_display GoogleComputeInstanceTemplate#enable_display}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.guestAccelerator"></a>

```typescript
public readonly guestAccelerator: IResolvable | GoogleComputeInstanceTemplateGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>[]

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#guest_accelerator GoogleComputeInstanceTemplate#guest_accelerator}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#id GoogleComputeInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceDescription`<sup>Optional</sup> <a name="instanceDescription" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.instanceDescription"></a>

```typescript
public readonly instanceDescription: string;
```

- *Type:* string

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#instance_description GoogleComputeInstanceTemplate#instance_description}

---

##### `keyRevocationActionType`<sup>Optional</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.keyRevocationActionType"></a>

```typescript
public readonly keyRevocationActionType: string;
```

- *Type:* string

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#key_revocation_action_type GoogleComputeInstanceTemplate#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to instances created from this template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
				Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#labels GoogleComputeInstanceTemplate#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#metadata GoogleComputeInstanceTemplate#metadata}

---

##### `metadataStartupScript`<sup>Optional</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.metadataStartupScript"></a>

```typescript
public readonly metadataStartupScript: string;
```

- *Type:* string

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#metadata_startup_script GoogleComputeInstanceTemplate#metadata_startup_script}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#min_cpu_platform GoogleComputeInstanceTemplate#min_cpu_platform}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#name GoogleComputeInstanceTemplate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Creates a unique name beginning with the specified prefix.

Conflicts with name. Max length is 54 characters. Prefixes with lengths longer than 37 characters will use a shortened UUID that will be more prone to collisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#name_prefix GoogleComputeInstanceTemplate#name_prefix}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | GoogleComputeInstanceTemplateNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#network_interface GoogleComputeInstanceTemplate#network_interface}

---

##### `networkPerformanceConfig`<sup>Optional</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.networkPerformanceConfig"></a>

```typescript
public readonly networkPerformanceConfig: GoogleComputeInstanceTemplateNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#network_performance_config GoogleComputeInstanceTemplate#network_performance_config}

---

##### `partnerMetadata`<sup>Optional</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.partnerMetadata"></a>

```typescript
public readonly partnerMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#partner_metadata GoogleComputeInstanceTemplate#partner_metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#project GoogleComputeInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

An instance template is a global resource that is not bound to a zone or a region.

However, you can still specify some regional resources in an instance template, which restricts the template to the region where that resource resides. For example, a custom subnetwork resource is tied to a specific region. Defaults to the region of the Provider if no value is given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#region GoogleComputeInstanceTemplate#region}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: GoogleComputeInstanceTemplateReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#reservation_affinity GoogleComputeInstanceTemplate#reservation_affinity}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
				Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
				The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#resource_manager_tags GoogleComputeInstanceTemplate#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#resource_policies GoogleComputeInstanceTemplate#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.scheduling"></a>

```typescript
public readonly scheduling: GoogleComputeInstanceTemplateScheduling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#scheduling GoogleComputeInstanceTemplate#scheduling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: GoogleComputeInstanceTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#service_account GoogleComputeInstanceTemplate#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleComputeInstanceTemplateShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#shielded_instance_config GoogleComputeInstanceTemplate#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#tags GoogleComputeInstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInstanceTemplateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#timeouts GoogleComputeInstanceTemplate#timeouts}

---

### GoogleComputeInstanceTemplateDisk <a name="GoogleComputeInstanceTemplateDisk" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateDisk: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.autoDelete">autoDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the disk should be auto-deleted. This defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.boot">boot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates that this is a boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.deviceName">deviceName</a></code> | <code>string</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskName">diskName</a></code> | <code>string</code> | Name of the disk. When not provided, this defaults to the name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskType">diskType</a></code> | <code>string</code> | The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.interface">interface</a></code> | <code>string</code> | Specifies the disk interface to use for attaching this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to disks,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.mode">mode</a></code> | <code>string</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedIops">provisionedIops</a></code> | <code>number</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedThroughput">provisionedThroughput</a></code> | <code>number</code> | Indicates how much throughput to provision for the disk, in MB/s. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | A list (short name or id) of resource policies to attach to this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.source">source</a></code> | <code>string</code> | The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImage">sourceImage</a></code> | <code>string</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshot">sourceSnapshot</a></code> | <code>string</code> | The source snapshot to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.type">type</a></code> | <code>string</code> | The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". |

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the disk should be auto-deleted. This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#auto_delete GoogleComputeInstanceTemplate#auto_delete}

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.boot"></a>

```typescript
public readonly boot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates that this is a boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#boot GoogleComputeInstanceTemplate#boot}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

If not specified, the server chooses a default device name to apply to this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#device_name GoogleComputeInstanceTemplate#device_name}

---

##### `diskEncryptionKey`<sup>Optional</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskEncryptionKey"></a>

```typescript
public readonly diskEncryptionKey: GoogleComputeInstanceTemplateDiskDiskEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#disk_encryption_key GoogleComputeInstanceTemplate#disk_encryption_key}

---

##### `diskName`<sup>Optional</sup> <a name="diskName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskName"></a>

```typescript
public readonly diskName: string;
```

- *Type:* string

Name of the disk. When not provided, this defaults to the name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#disk_name GoogleComputeInstanceTemplate#disk_name}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

The size of the image in gigabytes.

If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#disk_size_gb GoogleComputeInstanceTemplate#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#disk_type GoogleComputeInstanceTemplate#disk_type}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

Specifies the disk interface to use for attaching this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#interface GoogleComputeInstanceTemplate#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to disks,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#labels GoogleComputeInstanceTemplate#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If you are attaching or creating a boot disk, this must read-write mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#mode GoogleComputeInstanceTemplate#mode}

---

##### `provisionedIops`<sup>Optional</sup> <a name="provisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedIops"></a>

```typescript
public readonly provisionedIops: number;
```

- *Type:* number

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk) or the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks) depending on the selected disk_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#provisioned_iops GoogleComputeInstanceTemplate#provisioned_iops}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: number;
```

- *Type:* number

Indicates how much throughput to provision for the disk, in MB/s.

This sets the amount of data that can be read or written from the disk per second. Values must greater than or equal to 1. For more details, see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#provisioned_throughput GoogleComputeInstanceTemplate#provisioned_throughput}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#resource_manager_tags GoogleComputeInstanceTemplate#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

A list (short name or id) of resource policies to attach to this disk.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#resource_policies GoogleComputeInstanceTemplate#resource_policies}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach.

~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#source GoogleComputeInstanceTemplate#source}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

The image from which to initialize this disk.

This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#source_image GoogleComputeInstanceTemplate#source_image}

---

##### `sourceImageEncryptionKey`<sup>Optional</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceImageEncryptionKey"></a>

```typescript
public readonly sourceImageEncryptionKey: GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#source_image_encryption_key GoogleComputeInstanceTemplate#source_image_encryption_key}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshot"></a>

```typescript
public readonly sourceSnapshot: string;
```

- *Type:* string

The source snapshot to create this disk.

When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#source_snapshot GoogleComputeInstanceTemplate#source_snapshot}

---

##### `sourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.sourceSnapshotEncryptionKey"></a>

```typescript
public readonly sourceSnapshotEncryptionKey: GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#source_snapshot_encryption_key GoogleComputeInstanceTemplate#source_snapshot_encryption_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#type GoogleComputeInstanceTemplate#type}

---

### GoogleComputeInstanceTemplateDiskDiskEncryptionKey <a name="GoogleComputeInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateDiskDiskEncryptionKey: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

### GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey <a name="GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateDiskSourceImageEncryptionKey: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#kms_key_service_account GoogleComputeInstanceTemplate#kms_key_service_account}

---

### GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#kms_key_self_link GoogleComputeInstanceTemplate#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#kms_key_service_account GoogleComputeInstanceTemplate#kms_key_service_account}

---

### GoogleComputeInstanceTemplateGuestAccelerator <a name="GoogleComputeInstanceTemplateGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateGuestAccelerator: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.count">count</a></code> | <code>number</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.type">type</a></code> | <code>string</code> | The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#count GoogleComputeInstanceTemplate#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#type GoogleComputeInstanceTemplate#type}

---

### GoogleComputeInstanceTemplateNetworkInterface <a name="GoogleComputeInstanceTemplateNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateNetworkInterface: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.accessConfig">accessConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]</code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.aliasIpRange">aliasIpRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>number</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.network">network</a></code> | <code>string</code> | The name or self_link of the network to attach this interface to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkIp">networkIp</a></code> | <code>string</code> | The private IP address to assign to the instance. If empty, the address will be automatically assigned. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.nicType">nicType</a></code> | <code>string</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.queueCount">queueCount</a></code> | <code>number</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.stackType">stackType</a></code> | <code>string</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetwork">subnetwork</a></code> | <code>string</code> | The name of the subnetwork to attach this interface to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetworkProject">subnetworkProject</a></code> | <code>string</code> | The ID of the project in which the subnetwork belongs. |

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.accessConfig"></a>

```typescript
public readonly accessConfig: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#access_config GoogleComputeInstanceTemplate#access_config}

---

##### `aliasIpRange`<sup>Optional</sup> <a name="aliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.aliasIpRange"></a>

```typescript
public readonly aliasIpRange: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#alias_ip_range GoogleComputeInstanceTemplate#alias_ip_range}

---

##### `internalIpv6PrefixLength`<sup>Optional</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```typescript
public readonly internalIpv6PrefixLength: number;
```

- *Type:* number

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#internal_ipv6_prefix_length GoogleComputeInstanceTemplate#internal_ipv6_prefix_length}

---

##### `ipv6AccessConfig`<sup>Optional</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```typescript
public readonly ipv6AccessConfig: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#ipv6_access_config GoogleComputeInstanceTemplate#ipv6_access_config}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#ipv6_address GoogleComputeInstanceTemplate#ipv6_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name or self_link of the network to attach this interface to.

Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#network GoogleComputeInstanceTemplate#network}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#network_attachment GoogleComputeInstanceTemplate#network_attachment}

---

##### `networkIp`<sup>Optional</sup> <a name="networkIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.networkIp"></a>

```typescript
public readonly networkIp: string;
```

- *Type:* string

The private IP address to assign to the instance. If empty, the address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#network_ip GoogleComputeInstanceTemplate#network_ip}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#nic_type GoogleComputeInstanceTemplate#nic_type}

---

##### `queueCount`<sup>Optional</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.queueCount"></a>

```typescript
public readonly queueCount: number;
```

- *Type:* number

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#queue_count GoogleComputeInstanceTemplate#queue_count}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#stack_type GoogleComputeInstanceTemplate#stack_type}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The name of the subnetwork to attach this interface to.

The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#subnetwork GoogleComputeInstanceTemplate#subnetwork}

---

##### `subnetworkProject`<sup>Optional</sup> <a name="subnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface.property.subnetworkProject"></a>

```typescript
public readonly subnetworkProject: string;
```

- *Type:* string

The ID of the project in which the subnetwork belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#subnetwork_project GoogleComputeInstanceTemplate#subnetwork_project}

---

### GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig <a name="GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateNetworkInterfaceAccessConfig: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.natIp">natIp</a></code> | <code>string</code> | The IP address that will be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier">networkTier</a></code> | <code>string</code> | The networking tier used for configuring this instance template. |

---

##### `natIp`<sup>Optional</sup> <a name="natIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```typescript
public readonly natIp: string;
```

- *Type:* string

The IP address that will be 1:1 mapped to the instance's network ip.

If not given, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#nat_ip GoogleComputeInstanceTemplate#nat_ip}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

The networking tier used for configuring this instance template.

This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#network_tier GoogleComputeInstanceTemplate#network_tier}

---

### GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange <a name="GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateNetworkInterfaceAliasIpRange: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

The IP CIDR range represented by this alias IP range.

This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#ip_cidr_range GoogleComputeInstanceTemplate#ip_cidr_range}

---

##### `subnetworkRangeName`<sup>Optional</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

If left unspecified, the primary range of the subnetwork will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#subnetwork_range_name GoogleComputeInstanceTemplate#subnetwork_range_name}

---

### GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">networkTier</a></code> | <code>string</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#network_tier GoogleComputeInstanceTemplate#network_tier}

---

### GoogleComputeInstanceTemplateNetworkPerformanceConfig <a name="GoogleComputeInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateNetworkPerformanceConfig: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>string</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```typescript
public readonly totalEgressBandwidthTier: string;
```

- *Type:* string

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#total_egress_bandwidth_tier GoogleComputeInstanceTemplate#total_egress_bandwidth_tier}

---

### GoogleComputeInstanceTemplateReservationAffinity <a name="GoogleComputeInstanceTemplateReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateReservationAffinity: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.type">type</a></code> | <code>string</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#type GoogleComputeInstanceTemplate#type}

---

##### `specificReservation`<sup>Optional</sup> <a name="specificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity.property.specificReservation"></a>

```typescript
public readonly specificReservation: GoogleComputeInstanceTemplateReservationAffinitySpecificReservation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#specific_reservation GoogleComputeInstanceTemplate#specific_reservation}

---

### GoogleComputeInstanceTemplateReservationAffinitySpecificReservation <a name="GoogleComputeInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateReservationAffinitySpecificReservation: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.key">key</a></code> | <code>string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.values">values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#key GoogleComputeInstanceTemplate#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#values GoogleComputeInstanceTemplate#values}

---

### GoogleComputeInstanceTemplateScheduling <a name="GoogleComputeInstanceTemplateScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateScheduling: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.automaticRestart">automaticRestart</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.availabilityDomain">availabilityDomain</a></code> | <code>number</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.hostErrorTimeoutSeconds">hostErrorTimeoutSeconds</a></code> | <code>number</code> | Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>string</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]</code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maintenanceInterval">maintenanceInterval</a></code> | <code>string</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.minNodeCpus">minNodeCpus</a></code> | <code>number</code> | Minimum number of cpus for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.nodeAffinities">nodeAffinities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>[]</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onHostMaintenance">onHostMaintenance</a></code> | <code>string</code> | Defines the maintenance behavior for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.preemptible">preemptible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows instance to be preempted. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `automaticRestart`<sup>Optional</sup> <a name="automaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.automaticRestart"></a>

```typescript
public readonly automaticRestart: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#automatic_restart GoogleComputeInstanceTemplate#automatic_restart}

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: number;
```

- *Type:* number

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#availability_domain GoogleComputeInstanceTemplate#availability_domain}

---

##### `hostErrorTimeoutSeconds`<sup>Optional</sup> <a name="hostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.hostErrorTimeoutSeconds"></a>

```typescript
public readonly hostErrorTimeoutSeconds: number;
```

- *Type:* number

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#host_error_timeout_seconds GoogleComputeInstanceTemplate#host_error_timeout_seconds}

---

##### `instanceTerminationAction`<sup>Optional</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.instanceTerminationAction"></a>

```typescript
public readonly instanceTerminationAction: string;
```

- *Type:* string

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#instance_termination_action GoogleComputeInstanceTemplate#instance_termination_action}

---

##### `localSsdRecoveryTimeout`<sup>Optional</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```typescript
public readonly localSsdRecoveryTimeout: IResolvable | GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#local_ssd_recovery_timeout GoogleComputeInstanceTemplate#local_ssd_recovery_timeout}

---

##### `maintenanceInterval`<sup>Optional</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maintenanceInterval"></a>

```typescript
public readonly maintenanceInterval: string;
```

- *Type:* string

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#maintenance_interval GoogleComputeInstanceTemplate#maintenance_interval}

---

##### `maxRunDuration`<sup>Optional</sup> <a name="maxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.maxRunDuration"></a>

```typescript
public readonly maxRunDuration: GoogleComputeInstanceTemplateSchedulingMaxRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#max_run_duration GoogleComputeInstanceTemplate#max_run_duration}

---

##### `minNodeCpus`<sup>Optional</sup> <a name="minNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.minNodeCpus"></a>

```typescript
public readonly minNodeCpus: number;
```

- *Type:* number

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#min_node_cpus GoogleComputeInstanceTemplate#min_node_cpus}

---

##### `nodeAffinities`<sup>Optional</sup> <a name="nodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.nodeAffinities"></a>

```typescript
public readonly nodeAffinities: IResolvable | GoogleComputeInstanceTemplateSchedulingNodeAffinities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>[]

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#node_affinities GoogleComputeInstanceTemplate#node_affinities}

---

##### `onHostMaintenance`<sup>Optional</sup> <a name="onHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onHostMaintenance"></a>

```typescript
public readonly onHostMaintenance: string;
```

- *Type:* string

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#on_host_maintenance GoogleComputeInstanceTemplate#on_host_maintenance}

---

##### `onInstanceStopAction`<sup>Optional</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.onInstanceStopAction"></a>

```typescript
public readonly onInstanceStopAction: GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#on_instance_stop_action GoogleComputeInstanceTemplate#on_instance_stop_action}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.preemptible"></a>

```typescript
public readonly preemptible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#preemptible GoogleComputeInstanceTemplate#preemptible}

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#provisioning_model GoogleComputeInstanceTemplate#provisioning_model}

---

### GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#seconds GoogleComputeInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#nanos GoogleComputeInstanceTemplate#nanos}

---

### GoogleComputeInstanceTemplateSchedulingMaxRunDuration <a name="GoogleComputeInstanceTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateSchedulingMaxRunDuration: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#seconds GoogleComputeInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#nanos GoogleComputeInstanceTemplate#nanos}

---

### GoogleComputeInstanceTemplateSchedulingNodeAffinities <a name="GoogleComputeInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateSchedulingNodeAffinities: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#key GoogleComputeInstanceTemplate#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#operator GoogleComputeInstanceTemplate#operator}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#values GoogleComputeInstanceTemplate#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#key GoogleComputeInstanceTemplate#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#operator GoogleComputeInstanceTemplate#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#values GoogleComputeInstanceTemplate#values}.

---

### GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction <a name="GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateSchedulingOnInstanceStopAction: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd">discardLocalSsd</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `discardLocalSsd`<sup>Optional</sup> <a name="discardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```typescript
public readonly discardLocalSsd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#discard_local_ssd GoogleComputeInstanceTemplate#discard_local_ssd}

---

### GoogleComputeInstanceTemplateServiceAccount <a name="GoogleComputeInstanceTemplateServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateServiceAccount: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.scopes">scopes</a></code> | <code>string[]</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.email">email</a></code> | <code>string</code> | The service account e-mail address. If not given, the default Google Compute Engine service account is used. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#scopes GoogleComputeInstanceTemplate#scopes}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#email GoogleComputeInstanceTemplate#email}

---

### GoogleComputeInstanceTemplateShieldedInstanceConfig <a name="GoogleComputeInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateShieldedInstanceConfig: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Verify the digital signature of all boot components, and halt the boot process if signature verification fails. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#enable_integrity_monitoring GoogleComputeInstanceTemplate#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#enable_secure_boot GoogleComputeInstanceTemplate#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#enable_vtpm GoogleComputeInstanceTemplate#enable_vtpm}

---

### GoogleComputeInstanceTemplateTimeouts <a name="GoogleComputeInstanceTemplateTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

const googleComputeInstanceTemplateTimeouts: googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#create GoogleComputeInstanceTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#delete GoogleComputeInstanceTemplate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#create GoogleComputeInstanceTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance_template#delete GoogleComputeInstanceTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">resetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">resetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">resetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode">resetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">resetVisibleCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableNestedVirtualization` <a name="resetEnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```typescript
public resetEnableNestedVirtualization(): void
```

##### `resetEnableUefiNetworking` <a name="resetEnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```typescript
public resetEnableUefiNetworking(): void
```

##### `resetPerformanceMonitoringUnit` <a name="resetPerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```typescript
public resetPerformanceMonitoringUnit(): void
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```typescript
public resetThreadsPerCore(): void
```

##### `resetTurboMode` <a name="resetTurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```typescript
public resetTurboMode(): void
```

##### `resetVisibleCoreCount` <a name="resetVisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```typescript
public resetVisibleCoreCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">enableNestedVirtualizationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">enableUefiNetworkingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">performanceMonitoringUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput">turboModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">visibleCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">turboMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visibleCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableNestedVirtualizationInput`<sup>Optional</sup> <a name="enableNestedVirtualizationInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```typescript
public readonly enableNestedVirtualizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUefiNetworkingInput`<sup>Optional</sup> <a name="enableUefiNetworkingInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```typescript
public readonly enableUefiNetworkingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `performanceMonitoringUnitInput`<sup>Optional</sup> <a name="performanceMonitoringUnitInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```typescript
public readonly performanceMonitoringUnitInput: string;
```

- *Type:* string

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```typescript
public readonly threadsPerCoreInput: number;
```

- *Type:* number

---

##### `turboModeInput`<sup>Optional</sup> <a name="turboModeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```typescript
public readonly turboModeInput: string;
```

- *Type:* string

---

##### `visibleCoreCountInput`<sup>Optional</sup> <a name="visibleCoreCountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```typescript
public readonly visibleCoreCountInput: number;
```

- *Type:* number

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```typescript
public readonly enableNestedVirtualization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUefiNetworking`<sup>Required</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```typescript
public readonly enableUefiNetworking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `performanceMonitoringUnit`<sup>Required</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```typescript
public readonly performanceMonitoringUnit: string;
```

- *Type:* string

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

---

##### `turboMode`<sup>Required</sup> <a name="turboMode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```typescript
public readonly turboMode: string;
```

- *Type:* string

---

##### `visibleCoreCount`<sup>Required</sup> <a name="visibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```typescript
public readonly visibleCoreCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateAdvancedMachineFeatures">GoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

---


### GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference <a name="GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">resetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">resetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidentialInstanceType` <a name="resetConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```typescript
public resetConfidentialInstanceType(): void
```

##### `resetEnableConfidentialCompute` <a name="resetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```typescript
public resetEnableConfidentialCompute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">confidentialInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enableConfidentialComputeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidentialInstanceTypeInput`<sup>Optional</sup> <a name="confidentialInstanceTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```typescript
public readonly confidentialInstanceTypeInput: string;
```

- *Type:* string

---

##### `enableConfidentialComputeInput`<sup>Optional</sup> <a name="enableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```typescript
public readonly enableConfidentialComputeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialInstanceType`<sup>Required</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```typescript
public readonly confidentialInstanceType: string;
```

- *Type:* string

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```typescript
public readonly enableConfidentialCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateConfidentialInstanceConfig">GoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

---


### GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateDiskDiskEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

---


### GoogleComputeInstanceTemplateDiskList <a name="GoogleComputeInstanceTemplateDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceTemplateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>[]

---


### GoogleComputeInstanceTemplateDiskOutputReference <a name="GoogleComputeInstanceTemplateDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey">putDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey">putSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey">putSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetBoot">resetBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskEncryptionKey">resetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskName">resetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedIops">resetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImage">resetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey">resetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey">resetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskEncryptionKey` <a name="putDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey"></a>

```typescript
public putDiskEncryptionKey(value: GoogleComputeInstanceTemplateDiskDiskEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `putSourceImageEncryptionKey` <a name="putSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey"></a>

```typescript
public putSourceImageEncryptionKey(value: GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `putSourceSnapshotEncryptionKey` <a name="putSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey"></a>

```typescript
public putSourceSnapshotEncryptionKey(value: GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetAutoDelete"></a>

```typescript
public resetAutoDelete(): void
```

##### `resetBoot` <a name="resetBoot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetBoot"></a>

```typescript
public resetBoot(): void
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetDiskEncryptionKey` <a name="resetDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskEncryptionKey"></a>

```typescript
public resetDiskEncryptionKey(): void
```

##### `resetDiskName` <a name="resetDiskName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskName"></a>

```typescript
public resetDiskName(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetInterface"></a>

```typescript
public resetInterface(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetProvisionedIops` <a name="resetProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedIops"></a>

```typescript
public resetProvisionedIops(): void
```

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetProvisionedThroughput"></a>

```typescript
public resetProvisionedThroughput(): void
```

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetResourcePolicies"></a>

```typescript
public resetResourcePolicies(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceImage` <a name="resetSourceImage" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImage"></a>

```typescript
public resetSourceImage(): void
```

##### `resetSourceImageEncryptionKey` <a name="resetSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey"></a>

```typescript
public resetSourceImageEncryptionKey(): void
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshot"></a>

```typescript
public resetSourceSnapshot(): void
```

##### `resetSourceSnapshotEncryptionKey` <a name="resetSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey"></a>

```typescript
public resetSourceSnapshotEncryptionKey(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.bootInput">bootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput">diskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskNameInput">diskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIopsInput">provisionedIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput">sourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageInput">sourceImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput">sourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.boot">boot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskName">diskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIops">provisionedIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImage">sourceImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionKey`<sup>Required</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```typescript
public readonly diskEncryptionKey: GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference</a>

---

##### `sourceImageEncryptionKey`<sup>Required</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```typescript
public readonly sourceImageEncryptionKey: GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `sourceSnapshotEncryptionKey`<sup>Required</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```typescript
public readonly sourceSnapshotEncryptionKey: GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDeleteInput"></a>

```typescript
public readonly autoDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bootInput`<sup>Optional</sup> <a name="bootInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.bootInput"></a>

```typescript
public readonly bootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `diskEncryptionKeyInput`<sup>Optional</sup> <a name="diskEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput"></a>

```typescript
public readonly diskEncryptionKeyInput: GoogleComputeInstanceTemplateDiskDiskEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskDiskEncryptionKey">GoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `diskNameInput`<sup>Optional</sup> <a name="diskNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskNameInput"></a>

```typescript
public readonly diskNameInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `provisionedIopsInput`<sup>Optional</sup> <a name="provisionedIopsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIopsInput"></a>

```typescript
public readonly provisionedIopsInput: number;
```

- *Type:* number

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughputInput"></a>

```typescript
public readonly provisionedThroughputInput: number;
```

- *Type:* number

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePoliciesInput"></a>

```typescript
public readonly resourcePoliciesInput: string[];
```

- *Type:* string[]

---

##### `sourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="sourceImageEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput"></a>

```typescript
public readonly sourceImageEncryptionKeyInput: GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageInput"></a>

```typescript
public readonly sourceImageInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `sourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput"></a>

```typescript
public readonly sourceSnapshotEncryptionKeyInput: GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotInput"></a>

```typescript
public readonly sourceSnapshotInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.boot"></a>

```typescript
public readonly boot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskName"></a>

```typescript
public readonly diskName: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `provisionedIops`<sup>Required</sup> <a name="provisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```typescript
public readonly provisionedIops: number;
```

- *Type:* number

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: number;
```

- *Type:* number

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```typescript
public readonly sourceSnapshot: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDisk">GoogleComputeInstanceTemplateDisk</a>

---


### GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### GoogleComputeInstanceTemplateGuestAcceleratorList <a name="GoogleComputeInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceTemplateGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>[]

---


### GoogleComputeInstanceTemplateGuestAcceleratorOutputReference <a name="GoogleComputeInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateGuestAccelerator;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateGuestAccelerator">GoogleComputeInstanceTemplateGuestAccelerator</a>

---


### GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList <a name="GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]

---


### GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">resetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">resetNetworkTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNatIp` <a name="resetNatIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```typescript
public resetNatIp(): void
```

##### `resetNetworkTier` <a name="resetNetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```typescript
public resetNetworkTier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">natIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">natIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```typescript
public readonly publicPtrDomainName: string;
```

- *Type:* string

---

##### `natIpInput`<sup>Optional</sup> <a name="natIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```typescript
public readonly natIpInput: string;
```

- *Type:* string

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```typescript
public readonly networkTierInput: string;
```

- *Type:* string

---

##### `natIp`<sup>Required</sup> <a name="natIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```typescript
public readonly natIp: string;
```

- *Type:* string

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>

---


### GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]

---


### GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">resetSubnetworkRangeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetworkRangeName` <a name="resetSubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```typescript
public resetSubnetworkRangeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```typescript
public readonly subnetworkRangeNameInput: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>

---


### GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]

---


### GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">externalIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">externalIpv6PrefixLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIpv6`<sup>Required</sup> <a name="externalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```typescript
public readonly externalIpv6: string;
```

- *Type:* string

---

##### `externalIpv6PrefixLength`<sup>Required</sup> <a name="externalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```typescript
public readonly externalIpv6PrefixLength: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```typescript
public readonly publicPtrDomainName: string;
```

- *Type:* string

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```typescript
public readonly networkTierInput: string;
```

- *Type:* string

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>

---


### GoogleComputeInstanceTemplateNetworkInterfaceList <a name="GoogleComputeInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceTemplateNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>[]

---


### GoogleComputeInstanceTemplateNetworkInterfaceOutputReference <a name="GoogleComputeInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange">putAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">putIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange">resetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">resetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">resetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp">resetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount">resetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">resetSubnetworkProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```typescript
public putAccessConfig(value: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]

---

##### `putAliasIpRange` <a name="putAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```typescript
public putAliasIpRange(value: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]

---

##### `putIpv6AccessConfig` <a name="putIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```typescript
public putIpv6AccessConfig(value: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```typescript
public resetAccessConfig(): void
```

##### `resetAliasIpRange` <a name="resetAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```typescript
public resetAliasIpRange(): void
```

##### `resetInternalIpv6PrefixLength` <a name="resetInternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```typescript
public resetInternalIpv6PrefixLength(): void
```

##### `resetIpv6AccessConfig` <a name="resetIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```typescript
public resetIpv6AccessConfig(): void
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkAttachment"></a>

```typescript
public resetNetworkAttachment(): void
```

##### `resetNetworkIp` <a name="resetNetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```typescript
public resetNetworkIp(): void
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```typescript
public resetNicType(): void
```

##### `resetQueueCount` <a name="resetQueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```typescript
public resetQueueCount(): void
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```typescript
public resetStackType(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetSubnetworkProject` <a name="resetSubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```typescript
public resetSubnetworkProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">aliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput">accessConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">aliasIpRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">internalIpv6PrefixLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">ipv6AccessConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput">networkIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput">nicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput">queueCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput">stackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">subnetworkProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">networkIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType">nicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">queueCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType">stackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">subnetworkProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```typescript
public readonly accessConfig: GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `aliasIpRange`<sup>Required</sup> <a name="aliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```typescript
public readonly aliasIpRange: GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `ipv6AccessConfig`<sup>Required</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```typescript
public readonly ipv6AccessConfig: GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```typescript
public readonly ipv6AccessType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```typescript
public readonly accessConfigInput: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]

---

##### `aliasIpRangeInput`<sup>Optional</sup> <a name="aliasIpRangeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```typescript
public readonly aliasIpRangeInput: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]

---

##### `internalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="internalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```typescript
public readonly internalIpv6PrefixLengthInput: number;
```

- *Type:* number

---

##### `ipv6AccessConfigInput`<sup>Optional</sup> <a name="ipv6AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```typescript
public readonly ipv6AccessConfigInput: IResolvable | GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `networkIpInput`<sup>Optional</sup> <a name="networkIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```typescript
public readonly networkIpInput: string;
```

- *Type:* string

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```typescript
public readonly nicTypeInput: string;
```

- *Type:* string

---

##### `queueCountInput`<sup>Optional</sup> <a name="queueCountInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```typescript
public readonly queueCountInput: number;
```

- *Type:* number

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```typescript
public readonly stackTypeInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `subnetworkProjectInput`<sup>Optional</sup> <a name="subnetworkProjectInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```typescript
public readonly subnetworkProjectInput: string;
```

- *Type:* string

---

##### `internalIpv6PrefixLength`<sup>Required</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```typescript
public readonly internalIpv6PrefixLength: number;
```

- *Type:* number

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `networkIp`<sup>Required</sup> <a name="networkIp" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```typescript
public readonly networkIp: string;
```

- *Type:* string

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

---

##### `queueCount`<sup>Required</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```typescript
public readonly queueCount: number;
```

- *Type:* number

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `subnetworkProject`<sup>Required</sup> <a name="subnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```typescript
public readonly subnetworkProject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateNetworkInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkInterface">GoogleComputeInstanceTemplateNetworkInterface</a>

---


### GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference <a name="GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">totalEgressBandwidthTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalEgressBandwidthTierInput`<sup>Optional</sup> <a name="totalEgressBandwidthTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```typescript
public readonly totalEgressBandwidthTierInput: string;
```

- *Type:* string

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```typescript
public readonly totalEgressBandwidthTier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateNetworkPerformanceConfig">GoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

---


### GoogleComputeInstanceTemplateReservationAffinityOutputReference <a name="GoogleComputeInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation">putSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation">resetSpecificReservation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpecificReservation` <a name="putSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```typescript
public putSpecificReservation(value: GoogleComputeInstanceTemplateReservationAffinitySpecificReservation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `resetSpecificReservation` <a name="resetSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```typescript
public resetSpecificReservation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput">specificReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```typescript
public readonly specificReservation: GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `specificReservationInput`<sup>Optional</sup> <a name="specificReservationInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```typescript
public readonly specificReservationInput: GoogleComputeInstanceTemplateReservationAffinitySpecificReservation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinity">GoogleComputeInstanceTemplateReservationAffinity</a>

---


### GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateReservationAffinitySpecificReservation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---


### GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]

---


### GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>

---


### GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference <a name="GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateSchedulingMaxRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

---


### GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList <a name="GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```typescript
public get(index: number): GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateSchedulingNodeAffinities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>[]

---


### GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateSchedulingNodeAffinities;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>

---


### GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference <a name="GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">resetDiscardLocalSsd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiscardLocalSsd` <a name="resetDiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```typescript
public resetDiscardLocalSsd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">discardLocalSsdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discardLocalSsd</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `discardLocalSsdInput`<sup>Optional</sup> <a name="discardLocalSsdInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```typescript
public readonly discardLocalSsdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discardLocalSsd`<sup>Required</sup> <a name="discardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```typescript
public readonly discardLocalSsd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---


### GoogleComputeInstanceTemplateSchedulingOutputReference <a name="GoogleComputeInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">putLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration">putMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities">putNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction">putOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAutomaticRestart">resetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds">resetHostErrorTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction">resetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">resetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaintenanceInterval">resetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaxRunDuration">resetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMinNodeCpus">resetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetNodeAffinities">resetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance">resetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction">resetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetPreemptible">resetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalSsdRecoveryTimeout` <a name="putLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```typescript
public putLocalSsdRecoveryTimeout(value: IResolvable | GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]

---

##### `putMaxRunDuration` <a name="putMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration"></a>

```typescript
public putMaxRunDuration(value: GoogleComputeInstanceTemplateSchedulingMaxRunDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `putNodeAffinities` <a name="putNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities"></a>

```typescript
public putNodeAffinities(value: IResolvable | GoogleComputeInstanceTemplateSchedulingNodeAffinities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>[]

---

##### `putOnInstanceStopAction` <a name="putOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction"></a>

```typescript
public putOnInstanceStopAction(value: GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `resetAutomaticRestart` <a name="resetAutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```typescript
public resetAutomaticRestart(): void
```

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetHostErrorTimeoutSeconds` <a name="resetHostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds"></a>

```typescript
public resetHostErrorTimeoutSeconds(): void
```

##### `resetInstanceTerminationAction` <a name="resetInstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```typescript
public resetInstanceTerminationAction(): void
```

##### `resetLocalSsdRecoveryTimeout` <a name="resetLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```typescript
public resetLocalSsdRecoveryTimeout(): void
```

##### `resetMaintenanceInterval` <a name="resetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaintenanceInterval"></a>

```typescript
public resetMaintenanceInterval(): void
```

##### `resetMaxRunDuration` <a name="resetMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMaxRunDuration"></a>

```typescript
public resetMaxRunDuration(): void
```

##### `resetMinNodeCpus` <a name="resetMinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```typescript
public resetMinNodeCpus(): void
```

##### `resetNodeAffinities` <a name="resetNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```typescript
public resetNodeAffinities(): void
```

##### `resetOnHostMaintenance` <a name="resetOnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```typescript
public resetOnHostMaintenance(): void
```

##### `resetOnInstanceStopAction` <a name="resetOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction"></a>

```typescript
public resetOnInstanceStopAction(): void
```

##### `resetPreemptible` <a name="resetPreemptible" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetPreemptible"></a>

```typescript
public resetPreemptible(): void
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```typescript
public resetProvisioningModel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities">nodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList">GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestartInput">automaticRestartInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput">hostErrorTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput">instanceTerminationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">localSsdRecoveryTimeoutInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceIntervalInput">maintenanceIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput">maxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput">minNodeCpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput">nodeAffinitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput">onHostMaintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput">onInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptibleInput">preemptibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModelInput">provisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart">automaticRestart</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds">hostErrorTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceInterval">maintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus">minNodeCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">onHostMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localSsdRecoveryTimeout`<sup>Required</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```typescript
public readonly localSsdRecoveryTimeout: GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `maxRunDuration`<sup>Required</sup> <a name="maxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```typescript
public readonly maxRunDuration: GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference</a>

---

##### `nodeAffinities`<sup>Required</sup> <a name="nodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```typescript
public readonly nodeAffinities: GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList">GoogleComputeInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `onInstanceStopAction`<sup>Required</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```typescript
public readonly onInstanceStopAction: GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a>

---

##### `automaticRestartInput`<sup>Optional</sup> <a name="automaticRestartInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```typescript
public readonly automaticRestartInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: number;
```

- *Type:* number

---

##### `hostErrorTimeoutSecondsInput`<sup>Optional</sup> <a name="hostErrorTimeoutSecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput"></a>

```typescript
public readonly hostErrorTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `instanceTerminationActionInput`<sup>Optional</sup> <a name="instanceTerminationActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```typescript
public readonly instanceTerminationActionInput: string;
```

- *Type:* string

---

##### `localSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="localSsdRecoveryTimeoutInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```typescript
public readonly localSsdRecoveryTimeoutInput: IResolvable | GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]

---

##### `maintenanceIntervalInput`<sup>Optional</sup> <a name="maintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceIntervalInput"></a>

```typescript
public readonly maintenanceIntervalInput: string;
```

- *Type:* string

---

##### `maxRunDurationInput`<sup>Optional</sup> <a name="maxRunDurationInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput"></a>

```typescript
public readonly maxRunDurationInput: GoogleComputeInstanceTemplateSchedulingMaxRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingMaxRunDuration">GoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `minNodeCpusInput`<sup>Optional</sup> <a name="minNodeCpusInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```typescript
public readonly minNodeCpusInput: number;
```

- *Type:* number

---

##### `nodeAffinitiesInput`<sup>Optional</sup> <a name="nodeAffinitiesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```typescript
public readonly nodeAffinitiesInput: IResolvable | GoogleComputeInstanceTemplateSchedulingNodeAffinities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingNodeAffinities">GoogleComputeInstanceTemplateSchedulingNodeAffinities</a>[]

---

##### `onHostMaintenanceInput`<sup>Optional</sup> <a name="onHostMaintenanceInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```typescript
public readonly onHostMaintenanceInput: string;
```

- *Type:* string

---

##### `onInstanceStopActionInput`<sup>Optional</sup> <a name="onInstanceStopActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```typescript
public readonly onInstanceStopActionInput: GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `preemptibleInput`<sup>Optional</sup> <a name="preemptibleInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```typescript
public readonly preemptibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```typescript
public readonly provisioningModelInput: string;
```

- *Type:* string

---

##### `automaticRestart`<sup>Required</sup> <a name="automaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```typescript
public readonly automaticRestart: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: number;
```

- *Type:* number

---

##### `hostErrorTimeoutSeconds`<sup>Required</sup> <a name="hostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```typescript
public readonly hostErrorTimeoutSeconds: number;
```

- *Type:* number

---

##### `instanceTerminationAction`<sup>Required</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```typescript
public readonly instanceTerminationAction: string;
```

- *Type:* string

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceInterval"></a>

```typescript
public readonly maintenanceInterval: string;
```

- *Type:* string

---

##### `minNodeCpus`<sup>Required</sup> <a name="minNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```typescript
public readonly minNodeCpus: number;
```

- *Type:* number

---

##### `onHostMaintenance`<sup>Required</sup> <a name="onHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```typescript
public readonly onHostMaintenance: string;
```

- *Type:* string

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```typescript
public readonly preemptible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateScheduling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateScheduling">GoogleComputeInstanceTemplateScheduling</a>

---


### GoogleComputeInstanceTemplateServiceAccountOutputReference <a name="GoogleComputeInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateServiceAccount">GoogleComputeInstanceTemplateServiceAccount</a>

---


### GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference <a name="GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```typescript
public resetEnableVtpm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```typescript
public readonly enableVtpmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInstanceTemplateShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateShieldedInstanceConfig">GoogleComputeInstanceTemplateShieldedInstanceConfig</a>

---


### GoogleComputeInstanceTemplateTimeoutsOutputReference <a name="GoogleComputeInstanceTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeInstanceTemplate } from '@cdktf/provider-google-beta'

new googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInstanceTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeInstanceTemplate.GoogleComputeInstanceTemplateTimeouts">GoogleComputeInstanceTemplateTimeouts</a>

---



