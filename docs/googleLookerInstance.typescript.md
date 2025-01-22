# `googleLookerInstance` Submodule <a name="`googleLookerInstance` Submodule" id="@cdktf/provider-google-beta.googleLookerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLookerInstance <a name="GoogleLookerInstance" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance google_looker_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstance(scope: Construct, id: string, config: GoogleLookerInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig">GoogleLookerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig">GoogleLookerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings">putAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putCustomDomain">putCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod">putDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putPscConfig">putPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata">putUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetAdminSettings">resetAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetConsumerNetwork">resetConsumerNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDenyMaintenancePeriod">resetDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetFipsEnabled">resetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPlatformEdition">resetPlatformEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPrivateIpEnabled">resetPrivateIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscConfig">resetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscEnabled">resetPscEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPublicIpEnabled">resetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetReservedRange">resetReservedRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetUserMetadata">resetUserMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdminSettings` <a name="putAdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings"></a>

```typescript
public putAdminSettings(value: GoogleLookerInstanceAdminSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---

##### `putCustomDomain` <a name="putCustomDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putCustomDomain"></a>

```typescript
public putCustomDomain(value: GoogleLookerInstanceCustomDomain): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

---

##### `putDenyMaintenancePeriod` <a name="putDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod"></a>

```typescript
public putDenyMaintenancePeriod(value: GoogleLookerInstanceDenyMaintenancePeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: GoogleLookerInstanceEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: GoogleLookerInstanceMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig"></a>

```typescript
public putOauthConfig(value: GoogleLookerInstanceOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---

##### `putPscConfig` <a name="putPscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putPscConfig"></a>

```typescript
public putPscConfig(value: GoogleLookerInstancePscConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleLookerInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

---

##### `putUserMetadata` <a name="putUserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata"></a>

```typescript
public putUserMetadata(value: GoogleLookerInstanceUserMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---

##### `resetAdminSettings` <a name="resetAdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetAdminSettings"></a>

```typescript
public resetAdminSettings(): void
```

##### `resetConsumerNetwork` <a name="resetConsumerNetwork" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetConsumerNetwork"></a>

```typescript
public resetConsumerNetwork(): void
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetCustomDomain"></a>

```typescript
public resetCustomDomain(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDenyMaintenancePeriod` <a name="resetDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDenyMaintenancePeriod"></a>

```typescript
public resetDenyMaintenancePeriod(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetFipsEnabled` <a name="resetFipsEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetFipsEnabled"></a>

```typescript
public resetFipsEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetPlatformEdition` <a name="resetPlatformEdition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPlatformEdition"></a>

```typescript
public resetPlatformEdition(): void
```

##### `resetPrivateIpEnabled` <a name="resetPrivateIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPrivateIpEnabled"></a>

```typescript
public resetPrivateIpEnabled(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPscConfig` <a name="resetPscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscConfig"></a>

```typescript
public resetPscConfig(): void
```

##### `resetPscEnabled` <a name="resetPscEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscEnabled"></a>

```typescript
public resetPscEnabled(): void
```

##### `resetPublicIpEnabled` <a name="resetPublicIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPublicIpEnabled"></a>

```typescript
public resetPublicIpEnabled(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReservedRange` <a name="resetReservedRange" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetReservedRange"></a>

```typescript
public resetReservedRange(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserMetadata` <a name="resetUserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetUserMetadata"></a>

```typescript
public resetUserMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLookerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

googleLookerInstance.GoogleLookerInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

googleLookerInstance.GoogleLookerInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

googleLookerInstance.GoogleLookerInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

googleLookerInstance.GoogleLookerInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleLookerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLookerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLookerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLookerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettings">adminSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference">GoogleLookerInstanceAdminSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference">GoogleLookerInstanceCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference">GoogleLookerInstanceDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.egressPublicIp">egressPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference">GoogleLookerInstanceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPrivateIp">ingressPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPublicIp">ingressPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerUri">lookerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerVersion">lookerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference">GoogleLookerInstanceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference">GoogleLookerInstanceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference">GoogleLookerInstancePscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference">GoogleLookerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadata">userMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference">GoogleLookerInstanceUserMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettingsInput">adminSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetworkInput">consumerNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomainInput">customDomainInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriodInput">denyMaintenancePeriodInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabledInput">fipsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEditionInput">platformEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabledInput">privateIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfigInput">pscConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabledInput">pscEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabledInput">publicIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRangeInput">reservedRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadataInput">userMetadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetwork">consumerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabled">fipsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEdition">platformEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabled">privateIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabled">pscEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabled">publicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRange">reservedRange</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminSettings`<sup>Required</sup> <a name="adminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettings"></a>

```typescript
public readonly adminSettings: GoogleLookerInstanceAdminSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference">GoogleLookerInstanceAdminSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomain"></a>

```typescript
public readonly customDomain: GoogleLookerInstanceCustomDomainOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference">GoogleLookerInstanceCustomDomainOutputReference</a>

---

##### `denyMaintenancePeriod`<sup>Required</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriod"></a>

```typescript
public readonly denyMaintenancePeriod: GoogleLookerInstanceDenyMaintenancePeriodOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference">GoogleLookerInstanceDenyMaintenancePeriodOutputReference</a>

---

##### `egressPublicIp`<sup>Required</sup> <a name="egressPublicIp" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.egressPublicIp"></a>

```typescript
public readonly egressPublicIp: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleLookerInstanceEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference">GoogleLookerInstanceEncryptionConfigOutputReference</a>

---

##### `ingressPrivateIp`<sup>Required</sup> <a name="ingressPrivateIp" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPrivateIp"></a>

```typescript
public readonly ingressPrivateIp: string;
```

- *Type:* string

---

##### `ingressPublicIp`<sup>Required</sup> <a name="ingressPublicIp" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPublicIp"></a>

```typescript
public readonly ingressPublicIp: string;
```

- *Type:* string

---

##### `lookerUri`<sup>Required</sup> <a name="lookerUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerUri"></a>

```typescript
public readonly lookerUri: string;
```

- *Type:* string

---

##### `lookerVersion`<sup>Required</sup> <a name="lookerVersion" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerVersion"></a>

```typescript
public readonly lookerVersion: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: GoogleLookerInstanceMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference">GoogleLookerInstanceMaintenanceWindowOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleLookerInstanceOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference">GoogleLookerInstanceOauthConfigOutputReference</a>

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfig"></a>

```typescript
public readonly pscConfig: GoogleLookerInstancePscConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference">GoogleLookerInstancePscConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleLookerInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference">GoogleLookerInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `userMetadata`<sup>Required</sup> <a name="userMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadata"></a>

```typescript
public readonly userMetadata: GoogleLookerInstanceUserMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference">GoogleLookerInstanceUserMetadataOutputReference</a>

---

##### `adminSettingsInput`<sup>Optional</sup> <a name="adminSettingsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettingsInput"></a>

```typescript
public readonly adminSettingsInput: GoogleLookerInstanceAdminSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---

##### `consumerNetworkInput`<sup>Optional</sup> <a name="consumerNetworkInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetworkInput"></a>

```typescript
public readonly consumerNetworkInput: string;
```

- *Type:* string

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomainInput"></a>

```typescript
public readonly customDomainInput: GoogleLookerInstanceCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `denyMaintenancePeriodInput`<sup>Optional</sup> <a name="denyMaintenancePeriodInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriodInput"></a>

```typescript
public readonly denyMaintenancePeriodInput: GoogleLookerInstanceDenyMaintenancePeriod;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: GoogleLookerInstanceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---

##### `fipsEnabledInput`<sup>Optional</sup> <a name="fipsEnabledInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabledInput"></a>

```typescript
public readonly fipsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: GoogleLookerInstanceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfigInput"></a>

```typescript
public readonly oauthConfigInput: GoogleLookerInstanceOauthConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---

##### `platformEditionInput`<sup>Optional</sup> <a name="platformEditionInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEditionInput"></a>

```typescript
public readonly platformEditionInput: string;
```

- *Type:* string

---

##### `privateIpEnabledInput`<sup>Optional</sup> <a name="privateIpEnabledInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabledInput"></a>

```typescript
public readonly privateIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pscConfigInput`<sup>Optional</sup> <a name="pscConfigInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfigInput"></a>

```typescript
public readonly pscConfigInput: GoogleLookerInstancePscConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

---

##### `pscEnabledInput`<sup>Optional</sup> <a name="pscEnabledInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabledInput"></a>

```typescript
public readonly pscEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicIpEnabledInput`<sup>Optional</sup> <a name="publicIpEnabledInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabledInput"></a>

```typescript
public readonly publicIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `reservedRangeInput`<sup>Optional</sup> <a name="reservedRangeInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRangeInput"></a>

```typescript
public readonly reservedRangeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleLookerInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

---

##### `userMetadataInput`<sup>Optional</sup> <a name="userMetadataInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadataInput"></a>

```typescript
public readonly userMetadataInput: GoogleLookerInstanceUserMetadata;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetwork"></a>

```typescript
public readonly consumerNetwork: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `fipsEnabled`<sup>Required</sup> <a name="fipsEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabled"></a>

```typescript
public readonly fipsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platformEdition`<sup>Required</sup> <a name="platformEdition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEdition"></a>

```typescript
public readonly platformEdition: string;
```

- *Type:* string

---

##### `privateIpEnabled`<sup>Required</sup> <a name="privateIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabled"></a>

```typescript
public readonly privateIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pscEnabled`<sup>Required</sup> <a name="pscEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabled"></a>

```typescript
public readonly pscEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicIpEnabled`<sup>Required</sup> <a name="publicIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabled"></a>

```typescript
public readonly publicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `reservedRange`<sup>Required</sup> <a name="reservedRange" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRange"></a>

```typescript
public readonly reservedRange: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLookerInstanceAdminSettings <a name="GoogleLookerInstanceAdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceAdminSettings: googleLookerInstance.GoogleLookerInstanceAdminSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>string[]</code> | Email domain allowlist for the instance. |

---

##### `allowedEmailDomains`<sup>Optional</sup> <a name="allowedEmailDomains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.property.allowedEmailDomains"></a>

```typescript
public readonly allowedEmailDomains: string[];
```

- *Type:* string[]

Email domain allowlist for the instance.

Define the email domains to which your users can deliver Looker (Google Cloud core) content.
Updating this list will restart the instance. Updating the allowed email domains from terraform
means the value provided will be considered as the entire list and not an amendment to the
existing list of allowed email domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#allowed_email_domains GoogleLookerInstance#allowed_email_domains}

---

### GoogleLookerInstanceConfig <a name="GoogleLookerInstanceConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceConfig: googleLookerInstance.GoogleLookerInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.name">name</a></code> | <code>string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.adminSettings">adminSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.consumerNetwork">consumerNetwork</a></code> | <code>string</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Policy to determine if the cluster should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.fipsEnabled">fipsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | FIPS 140-2 Encryption enablement for Looker (Google Cloud Core). |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.platformEdition">platformEdition</a></code> | <code>string</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.privateIpEnabled">privateIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscEnabled">pscEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Public Service Connect (PSC) is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.publicIpEnabled">publicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.region">region</a></code> | <code>string</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.reservedRange">reservedRange</a></code> | <code>string</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.userMetadata">userMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#name GoogleLookerInstance#name}

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleLookerInstanceOauthConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#oauth_config GoogleLookerInstance#oauth_config}

---

##### `adminSettings`<sup>Optional</sup> <a name="adminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.adminSettings"></a>

```typescript
public readonly adminSettings: GoogleLookerInstanceAdminSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#admin_settings GoogleLookerInstance#admin_settings}

---

##### `consumerNetwork`<sup>Optional</sup> <a name="consumerNetwork" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.consumerNetwork"></a>

```typescript
public readonly consumerNetwork: string;
```

- *Type:* string

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#consumer_network GoogleLookerInstance#consumer_network}

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.customDomain"></a>

```typescript
public readonly customDomain: GoogleLookerInstanceCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#custom_domain GoogleLookerInstance#custom_domain}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Policy to determine if the cluster should be deleted forcefully.

If setting deletion_policy = "FORCE", the Looker instance will be deleted regardless
of its nested resources. If set to "DEFAULT", Looker instances that still have
nested resources will return an error. Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#deletion_policy GoogleLookerInstance#deletion_policy}

---

##### `denyMaintenancePeriod`<sup>Optional</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.denyMaintenancePeriod"></a>

```typescript
public readonly denyMaintenancePeriod: GoogleLookerInstanceDenyMaintenancePeriod;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#deny_maintenance_period GoogleLookerInstance#deny_maintenance_period}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleLookerInstanceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#encryption_config GoogleLookerInstance#encryption_config}

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.fipsEnabled"></a>

```typescript
public readonly fipsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

FIPS 140-2 Encryption enablement for Looker (Google Cloud Core).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#fips_enabled GoogleLookerInstance#fips_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: GoogleLookerInstanceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#maintenance_window GoogleLookerInstance#maintenance_window}

---

##### `platformEdition`<sup>Optional</sup> <a name="platformEdition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.platformEdition"></a>

```typescript
public readonly platformEdition: string;
```

- *Type:* string

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:
- LOOKER_CORE_TRIAL: trial instance (Currently Unavailable)
- LOOKER_CORE_STANDARD: pay as you go standard instance (Currently Unavailable)
- LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
- LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
- LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
- LOOKER_CORE_NONPROD_STANDARD_ANNUAL: nonprod subscription standard instance
- LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL: nonprod subscription enterprise instance
- LOOKER_CORE_NONPROD_EMBED_ANNUAL: nonprod subscription embed instance Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_CORE_NONPROD_STANDARD_ANNUAL", "LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL", "LOOKER_CORE_NONPROD_EMBED_ANNUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#platform_edition GoogleLookerInstance#platform_edition}

---

##### `privateIpEnabled`<sup>Optional</sup> <a name="privateIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.privateIpEnabled"></a>

```typescript
public readonly privateIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#private_ip_enabled GoogleLookerInstance#private_ip_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}.

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscConfig"></a>

```typescript
public readonly pscConfig: GoogleLookerInstancePscConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#psc_config GoogleLookerInstance#psc_config}

---

##### `pscEnabled`<sup>Optional</sup> <a name="pscEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscEnabled"></a>

```typescript
public readonly pscEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Public Service Connect (PSC) is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#psc_enabled GoogleLookerInstance#psc_enabled}

---

##### `publicIpEnabled`<sup>Optional</sup> <a name="publicIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.publicIpEnabled"></a>

```typescript
public readonly publicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#public_ip_enabled GoogleLookerInstance#public_ip_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#region GoogleLookerInstance#region}

---

##### `reservedRange`<sup>Optional</sup> <a name="reservedRange" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.reservedRange"></a>

```typescript
public readonly reservedRange: string;
```

- *Type:* string

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#reserved_range GoogleLookerInstance#reserved_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleLookerInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#timeouts GoogleLookerInstance#timeouts}

---

##### `userMetadata`<sup>Optional</sup> <a name="userMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.userMetadata"></a>

```typescript
public readonly userMetadata: GoogleLookerInstanceUserMetadata;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#user_metadata GoogleLookerInstance#user_metadata}

---

### GoogleLookerInstanceCustomDomain <a name="GoogleLookerInstanceCustomDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceCustomDomain: googleLookerInstance.GoogleLookerInstanceCustomDomain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain.property.domain">domain</a></code> | <code>string</code> | Domain name. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#domain GoogleLookerInstance#domain}

---

### GoogleLookerInstanceDenyMaintenancePeriod <a name="GoogleLookerInstanceDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceDenyMaintenancePeriod: googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.time">time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | time block. |

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.endDate"></a>

```typescript
public readonly endDate: GoogleLookerInstanceDenyMaintenancePeriodEndDate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#end_date GoogleLookerInstance#end_date}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.startDate"></a>

```typescript
public readonly startDate: GoogleLookerInstanceDenyMaintenancePeriodStartDate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#start_date GoogleLookerInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.time"></a>

```typescript
public readonly time: GoogleLookerInstanceDenyMaintenancePeriodTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#time GoogleLookerInstance#time}

---

### GoogleLookerInstanceDenyMaintenancePeriodEndDate <a name="GoogleLookerInstanceDenyMaintenancePeriodEndDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceDenyMaintenancePeriodEndDate: googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#day GoogleLookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#month GoogleLookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#year GoogleLookerInstance#year}

---

### GoogleLookerInstanceDenyMaintenancePeriodStartDate <a name="GoogleLookerInstanceDenyMaintenancePeriodStartDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceDenyMaintenancePeriodStartDate: googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#day GoogleLookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#month GoogleLookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#year GoogleLookerInstance#year}

---

### GoogleLookerInstanceDenyMaintenancePeriodTime <a name="GoogleLookerInstanceDenyMaintenancePeriodTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceDenyMaintenancePeriodTime: googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#hours GoogleLookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#minutes GoogleLookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#nanos GoogleLookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#seconds GoogleLookerInstance#seconds}

---

### GoogleLookerInstanceEncryptionConfig <a name="GoogleLookerInstanceEncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceEncryptionConfig: googleLookerInstance.GoogleLookerInstanceEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Name of the customer managed encryption key (CMEK) in KMS. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Name of the customer managed encryption key (CMEK) in KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#kms_key_name GoogleLookerInstance#kms_key_name}

---

### GoogleLookerInstanceMaintenanceWindow <a name="GoogleLookerInstanceMaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceMaintenanceWindow: googleLookerInstance.GoogleLookerInstanceMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Required. Day of the week for this MaintenanceWindow (in UTC). |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Required. Day of the week for this MaintenanceWindow (in UTC).

MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#day_of_week GoogleLookerInstance#day_of_week}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: GoogleLookerInstanceMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#start_time GoogleLookerInstance#start_time}

---

### GoogleLookerInstanceMaintenanceWindowStartTime <a name="GoogleLookerInstanceMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceMaintenanceWindowStartTime: googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#hours GoogleLookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#minutes GoogleLookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#nanos GoogleLookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#seconds GoogleLookerInstance#seconds}

---

### GoogleLookerInstanceOauthConfig <a name="GoogleLookerInstanceOauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceOauthConfig: googleLookerInstance.GoogleLookerInstanceOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID for the Oauth config. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret for the Oauth config. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#client_id GoogleLookerInstance#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#client_secret GoogleLookerInstance#client_secret}

---

### GoogleLookerInstancePscConfig <a name="GoogleLookerInstancePscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstancePscConfig: googleLookerInstance.GoogleLookerInstancePscConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.allowedVpcs">allowedVpcs</a></code> | <code>string[]</code> | List of VPCs that are allowed ingress into the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.serviceAttachments">serviceAttachments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>[]</code> | service_attachments block. |

---

##### `allowedVpcs`<sup>Optional</sup> <a name="allowedVpcs" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.allowedVpcs"></a>

```typescript
public readonly allowedVpcs: string[];
```

- *Type:* string[]

List of VPCs that are allowed ingress into the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#allowed_vpcs GoogleLookerInstance#allowed_vpcs}

---

##### `serviceAttachments`<sup>Optional</sup> <a name="serviceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.serviceAttachments"></a>

```typescript
public readonly serviceAttachments: IResolvable | GoogleLookerInstancePscConfigServiceAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>[]

service_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#service_attachments GoogleLookerInstance#service_attachments}

---

### GoogleLookerInstancePscConfigServiceAttachments <a name="GoogleLookerInstancePscConfigServiceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstancePscConfigServiceAttachments: googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.localFqdn">localFqdn</a></code> | <code>string</code> | Fully qualified domain name that will be used in the private DNS record created for the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri">targetServiceAttachmentUri</a></code> | <code>string</code> | URI of the service attachment to connect to. |

---

##### `localFqdn`<sup>Optional</sup> <a name="localFqdn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.localFqdn"></a>

```typescript
public readonly localFqdn: string;
```

- *Type:* string

Fully qualified domain name that will be used in the private DNS record created for the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#local_fqdn GoogleLookerInstance#local_fqdn}

---

##### `targetServiceAttachmentUri`<sup>Optional</sup> <a name="targetServiceAttachmentUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri"></a>

```typescript
public readonly targetServiceAttachmentUri: string;
```

- *Type:* string

URI of the service attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#target_service_attachment_uri GoogleLookerInstance#target_service_attachment_uri}

---

### GoogleLookerInstanceTimeouts <a name="GoogleLookerInstanceTimeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceTimeouts: googleLookerInstance.GoogleLookerInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#create GoogleLookerInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#delete GoogleLookerInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#update GoogleLookerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#create GoogleLookerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#delete GoogleLookerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#update GoogleLookerInstance#update}.

---

### GoogleLookerInstanceUserMetadata <a name="GoogleLookerInstanceUserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

const googleLookerInstanceUserMetadata: googleLookerInstance.GoogleLookerInstanceUserMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalDeveloperUserCount">additionalDeveloperUserCount</a></code> | <code>number</code> | Number of additional Developer Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalStandardUserCount">additionalStandardUserCount</a></code> | <code>number</code> | Number of additional Standard Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalViewerUserCount">additionalViewerUserCount</a></code> | <code>number</code> | Number of additional Viewer Users to allocate to the Looker Instance. |

---

##### `additionalDeveloperUserCount`<sup>Optional</sup> <a name="additionalDeveloperUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalDeveloperUserCount"></a>

```typescript
public readonly additionalDeveloperUserCount: number;
```

- *Type:* number

Number of additional Developer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#additional_developer_user_count GoogleLookerInstance#additional_developer_user_count}

---

##### `additionalStandardUserCount`<sup>Optional</sup> <a name="additionalStandardUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalStandardUserCount"></a>

```typescript
public readonly additionalStandardUserCount: number;
```

- *Type:* number

Number of additional Standard Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#additional_standard_user_count GoogleLookerInstance#additional_standard_user_count}

---

##### `additionalViewerUserCount`<sup>Optional</sup> <a name="additionalViewerUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalViewerUserCount"></a>

```typescript
public readonly additionalViewerUserCount: number;
```

- *Type:* number

Number of additional Viewer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_looker_instance#additional_viewer_user_count GoogleLookerInstance#additional_viewer_user_count}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLookerInstanceAdminSettingsOutputReference <a name="GoogleLookerInstanceAdminSettingsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains">resetAllowedEmailDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedEmailDomains` <a name="resetAllowedEmailDomains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains"></a>

```typescript
public resetAllowedEmailDomains(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput">allowedEmailDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedEmailDomainsInput`<sup>Optional</sup> <a name="allowedEmailDomainsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput"></a>

```typescript
public readonly allowedEmailDomainsInput: string[];
```

- *Type:* string[]

---

##### `allowedEmailDomains`<sup>Required</sup> <a name="allowedEmailDomains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains"></a>

```typescript
public readonly allowedEmailDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceAdminSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---


### GoogleLookerInstanceCustomDomainOutputReference <a name="GoogleLookerInstanceCustomDomainOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resetDomain">resetDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceDenyMaintenancePeriodEndDate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime">putTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndDate` <a name="putEndDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate"></a>

```typescript
public putEndDate(value: GoogleLookerInstanceDenyMaintenancePeriodEndDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate"></a>

```typescript
public putStartDate(value: GoogleLookerInstanceDenyMaintenancePeriodStartDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `putTime` <a name="putTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime"></a>

```typescript
public putTime(value: GoogleLookerInstanceDenyMaintenancePeriodTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference">GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput">timeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDate"></a>

```typescript
public readonly endDate: GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDate"></a>

```typescript
public readonly startDate: GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.time"></a>

```typescript
public readonly time: GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference">GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```typescript
public readonly endDateInput: GoogleLookerInstanceDenyMaintenancePeriodEndDate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```typescript
public readonly startDateInput: GoogleLookerInstanceDenyMaintenancePeriodStartDate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: GoogleLookerInstanceDenyMaintenancePeriodTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceDenyMaintenancePeriod;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceDenyMaintenancePeriodStartDate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceDenyMaintenancePeriodTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---


### GoogleLookerInstanceEncryptionConfigOutputReference <a name="GoogleLookerInstanceEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion">kmsKeyNameVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyState">kmsKeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameVersion`<sup>Required</sup> <a name="kmsKeyNameVersion" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion"></a>

```typescript
public readonly kmsKeyNameVersion: string;
```

- *Type:* string

---

##### `kmsKeyState`<sup>Required</sup> <a name="kmsKeyState" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyState"></a>

```typescript
public readonly kmsKeyState: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---


### GoogleLookerInstanceMaintenanceWindowOutputReference <a name="GoogleLookerInstanceMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: GoogleLookerInstanceMaintenanceWindowStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference">GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference">GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: GoogleLookerInstanceMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---


### GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference <a name="GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---


### GoogleLookerInstanceOauthConfigOutputReference <a name="GoogleLookerInstanceOauthConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceOauthConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---


### GoogleLookerInstancePscConfigOutputReference <a name="GoogleLookerInstancePscConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstancePscConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.putServiceAttachments">putServiceAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetAllowedVpcs">resetAllowedVpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetServiceAttachments">resetServiceAttachments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceAttachments` <a name="putServiceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.putServiceAttachments"></a>

```typescript
public putServiceAttachments(value: IResolvable | GoogleLookerInstancePscConfigServiceAttachments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.putServiceAttachments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>[]

---

##### `resetAllowedVpcs` <a name="resetAllowedVpcs" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetAllowedVpcs"></a>

```typescript
public resetAllowedVpcs(): void
```

##### `resetServiceAttachments` <a name="resetServiceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetServiceAttachments"></a>

```typescript
public resetServiceAttachments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri">lookerServiceAttachmentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachments">serviceAttachments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList">GoogleLookerInstancePscConfigServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcsInput">allowedVpcsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachmentsInput">serviceAttachmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcs">allowedVpcs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lookerServiceAttachmentUri`<sup>Required</sup> <a name="lookerServiceAttachmentUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri"></a>

```typescript
public readonly lookerServiceAttachmentUri: string;
```

- *Type:* string

---

##### `serviceAttachments`<sup>Required</sup> <a name="serviceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachments"></a>

```typescript
public readonly serviceAttachments: GoogleLookerInstancePscConfigServiceAttachmentsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList">GoogleLookerInstancePscConfigServiceAttachmentsList</a>

---

##### `allowedVpcsInput`<sup>Optional</sup> <a name="allowedVpcsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcsInput"></a>

```typescript
public readonly allowedVpcsInput: string[];
```

- *Type:* string[]

---

##### `serviceAttachmentsInput`<sup>Optional</sup> <a name="serviceAttachmentsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachmentsInput"></a>

```typescript
public readonly serviceAttachmentsInput: IResolvable | GoogleLookerInstancePscConfigServiceAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>[]

---

##### `allowedVpcs`<sup>Required</sup> <a name="allowedVpcs" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcs"></a>

```typescript
public readonly allowedVpcs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstancePscConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

---


### GoogleLookerInstancePscConfigServiceAttachmentsList <a name="GoogleLookerInstancePscConfigServiceAttachmentsList" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.get"></a>

```typescript
public get(index: number): GoogleLookerInstancePscConfigServiceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLookerInstancePscConfigServiceAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>[]

---


### GoogleLookerInstancePscConfigServiceAttachmentsOutputReference <a name="GoogleLookerInstancePscConfigServiceAttachmentsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn">resetLocalFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri">resetTargetServiceAttachmentUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalFqdn` <a name="resetLocalFqdn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn"></a>

```typescript
public resetLocalFqdn(): void
```

##### `resetTargetServiceAttachmentUri` <a name="resetTargetServiceAttachmentUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri"></a>

```typescript
public resetTargetServiceAttachmentUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus">connectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput">localFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput">targetServiceAttachmentUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn">localFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri">targetServiceAttachmentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus"></a>

```typescript
public readonly connectionStatus: string;
```

- *Type:* string

---

##### `localFqdnInput`<sup>Optional</sup> <a name="localFqdnInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput"></a>

```typescript
public readonly localFqdnInput: string;
```

- *Type:* string

---

##### `targetServiceAttachmentUriInput`<sup>Optional</sup> <a name="targetServiceAttachmentUriInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput"></a>

```typescript
public readonly targetServiceAttachmentUriInput: string;
```

- *Type:* string

---

##### `localFqdn`<sup>Required</sup> <a name="localFqdn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn"></a>

```typescript
public readonly localFqdn: string;
```

- *Type:* string

---

##### `targetServiceAttachmentUri`<sup>Required</sup> <a name="targetServiceAttachmentUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri"></a>

```typescript
public readonly targetServiceAttachmentUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLookerInstancePscConfigServiceAttachments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>

---


### GoogleLookerInstanceTimeoutsOutputReference <a name="GoogleLookerInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLookerInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

---


### GoogleLookerInstanceUserMetadataOutputReference <a name="GoogleLookerInstanceUserMetadataOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer"></a>

```typescript
import { googleLookerInstance } from '@cdktf/provider-google-beta'

new googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount">resetAdditionalDeveloperUserCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount">resetAdditionalStandardUserCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount">resetAdditionalViewerUserCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalDeveloperUserCount` <a name="resetAdditionalDeveloperUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount"></a>

```typescript
public resetAdditionalDeveloperUserCount(): void
```

##### `resetAdditionalStandardUserCount` <a name="resetAdditionalStandardUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount"></a>

```typescript
public resetAdditionalStandardUserCount(): void
```

##### `resetAdditionalViewerUserCount` <a name="resetAdditionalViewerUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount"></a>

```typescript
public resetAdditionalViewerUserCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput">additionalDeveloperUserCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput">additionalStandardUserCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput">additionalViewerUserCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount">additionalDeveloperUserCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount">additionalStandardUserCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount">additionalViewerUserCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDeveloperUserCountInput`<sup>Optional</sup> <a name="additionalDeveloperUserCountInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput"></a>

```typescript
public readonly additionalDeveloperUserCountInput: number;
```

- *Type:* number

---

##### `additionalStandardUserCountInput`<sup>Optional</sup> <a name="additionalStandardUserCountInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput"></a>

```typescript
public readonly additionalStandardUserCountInput: number;
```

- *Type:* number

---

##### `additionalViewerUserCountInput`<sup>Optional</sup> <a name="additionalViewerUserCountInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput"></a>

```typescript
public readonly additionalViewerUserCountInput: number;
```

- *Type:* number

---

##### `additionalDeveloperUserCount`<sup>Required</sup> <a name="additionalDeveloperUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount"></a>

```typescript
public readonly additionalDeveloperUserCount: number;
```

- *Type:* number

---

##### `additionalStandardUserCount`<sup>Required</sup> <a name="additionalStandardUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount"></a>

```typescript
public readonly additionalStandardUserCount: number;
```

- *Type:* number

---

##### `additionalViewerUserCount`<sup>Required</sup> <a name="additionalViewerUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount"></a>

```typescript
public readonly additionalViewerUserCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLookerInstanceUserMetadata;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---



