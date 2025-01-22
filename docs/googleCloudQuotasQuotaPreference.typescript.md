# `googleCloudQuotasQuotaPreference` Submodule <a name="`googleCloudQuotasQuotaPreference` Submodule" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudQuotasQuotaPreference <a name="GoogleCloudQuotasQuotaPreference" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference google_cloud_quotas_quota_preference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer"></a>

```typescript
import { googleCloudQuotasQuotaPreference } from '@cdktf/provider-google-beta'

new googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference(scope: Construct, id: string, config: GoogleCloudQuotasQuotaPreferenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig">GoogleCloudQuotasQuotaPreferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig">GoogleCloudQuotasQuotaPreferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putQuotaConfig">putQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetContactEmail">resetContactEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetIgnoreSafetyChecks">resetIgnoreSafetyChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetJustification">resetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetQuotaId">resetQuotaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQuotaConfig` <a name="putQuotaConfig" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putQuotaConfig"></a>

```typescript
public putQuotaConfig(value: GoogleCloudQuotasQuotaPreferenceQuotaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudQuotasQuotaPreferenceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>

---

##### `resetContactEmail` <a name="resetContactEmail" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetContactEmail"></a>

```typescript
public resetContactEmail(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreSafetyChecks` <a name="resetIgnoreSafetyChecks" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetIgnoreSafetyChecks"></a>

```typescript
public resetIgnoreSafetyChecks(): void
```

##### `resetJustification` <a name="resetJustification" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetJustification"></a>

```typescript
public resetJustification(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetQuotaId` <a name="resetQuotaId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetQuotaId"></a>

```typescript
public resetQuotaId(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isConstruct"></a>

```typescript
import { googleCloudQuotasQuotaPreference } from '@cdktf/provider-google-beta'

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformElement"></a>

```typescript
import { googleCloudQuotasQuotaPreference } from '@cdktf/provider-google-beta'

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformResource"></a>

```typescript
import { googleCloudQuotasQuotaPreference } from '@cdktf/provider-google-beta'

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport"></a>

```typescript
import { googleCloudQuotasQuotaPreference } from '@cdktf/provider-google-beta'

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudQuotasQuotaPreference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudQuotasQuotaPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudQuotasQuotaPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfig">quotaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference">GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference">GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmailInput">contactEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecksInput">ignoreSafetyChecksInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justificationInput">justificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfigInput">quotaConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaIdInput">quotaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmail">contactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecks">ignoreSafetyChecks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justification">justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaId">quotaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `quotaConfig`<sup>Required</sup> <a name="quotaConfig" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfig"></a>

```typescript
public readonly quotaConfig: GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference">GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference">GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `contactEmailInput`<sup>Optional</sup> <a name="contactEmailInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmailInput"></a>

```typescript
public readonly contactEmailInput: string;
```

- *Type:* string

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreSafetyChecksInput`<sup>Optional</sup> <a name="ignoreSafetyChecksInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecksInput"></a>

```typescript
public readonly ignoreSafetyChecksInput: string;
```

- *Type:* string

---

##### `justificationInput`<sup>Optional</sup> <a name="justificationInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justificationInput"></a>

```typescript
public readonly justificationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `quotaConfigInput`<sup>Optional</sup> <a name="quotaConfigInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfigInput"></a>

```typescript
public readonly quotaConfigInput: GoogleCloudQuotasQuotaPreferenceQuotaConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `quotaIdInput`<sup>Optional</sup> <a name="quotaIdInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaIdInput"></a>

```typescript
public readonly quotaIdInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudQuotasQuotaPreferenceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>

---

##### `contactEmail`<sup>Required</sup> <a name="contactEmail" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmail"></a>

```typescript
public readonly contactEmail: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreSafetyChecks`<sup>Required</sup> <a name="ignoreSafetyChecks" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecks"></a>

```typescript
public readonly ignoreSafetyChecks: string;
```

- *Type:* string

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `quotaId`<sup>Required</sup> <a name="quotaId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaId"></a>

```typescript
public readonly quotaId: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudQuotasQuotaPreferenceConfig <a name="GoogleCloudQuotasQuotaPreferenceConfig" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.Initializer"></a>

```typescript
import { googleCloudQuotasQuotaPreference } from '@cdktf/provider-google-beta'

const googleCloudQuotasQuotaPreferenceConfig: googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaConfig">quotaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a></code> | quota_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.contactEmail">contactEmail</a></code> | <code>string</code> | An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | The dimensions that this quota preference applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#id GoogleCloudQuotasQuotaPreference#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks">ignoreSafetyChecks</a></code> | <code>string</code> | The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.justification">justification</a></code> | <code>string</code> | The reason / justification for this quota preference. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.name">name</a></code> | <code>string</code> | The resource name of the quota preference. Required except in the CREATE requests. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the quota preference. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaId">quotaId</a></code> | <code>string</code> | The id of the quota to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.service">service</a></code> | <code>string</code> | The name of the service to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `quotaConfig`<sup>Required</sup> <a name="quotaConfig" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaConfig"></a>

```typescript
public readonly quotaConfig: GoogleCloudQuotasQuotaPreferenceQuotaConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#quota_config GoogleCloudQuotasQuotaPreference#quota_config}

---

##### `contactEmail`<sup>Optional</sup> <a name="contactEmail" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.contactEmail"></a>

```typescript
public readonly contactEmail: string;
```

- *Type:* string

An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted.

The Google account for the email address must have quota update permission for the project, folder or organization this quota preference is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#contact_email GoogleCloudQuotasQuotaPreference#contact_email}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The dimensions that this quota preference applies to.

The key of the map entry is the name of a dimension, such as "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.

NOTE: QuotaPreferences can only be applied across all values of "user" and "resource" dimension. Do not set values for "user" or "resource" in the dimension map.

Example: '{"provider": "Foo Inc"}' where "provider" is a service specific dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#dimensions GoogleCloudQuotasQuotaPreference#dimensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#id GoogleCloudQuotasQuotaPreference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreSafetyChecks`<sup>Optional</sup> <a name="ignoreSafetyChecks" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks"></a>

```typescript
public readonly ignoreSafetyChecks: string;
```

- *Type:* string

The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#ignore_safety_checks GoogleCloudQuotasQuotaPreference#ignore_safety_checks}

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

The reason / justification for this quota preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#justification GoogleCloudQuotasQuotaPreference#justification}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the quota preference. Required except in the CREATE requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#name GoogleCloudQuotasQuotaPreference#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the quota preference.

Allowed parents are "projects/[project-id / number]" or "folders/[folder-id / number]" or "organizations/[org-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#parent GoogleCloudQuotasQuotaPreference#parent}

---

##### `quotaId`<sup>Optional</sup> <a name="quotaId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaId"></a>

```typescript
public readonly quotaId: string;
```

- *Type:* string

The id of the quota to which the quota preference is applied.

A quota id is unique in the service.
Example: 'CPUS-per-project-region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#quota_id GoogleCloudQuotasQuotaPreference#quota_id}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the service to which the quota preference is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#service GoogleCloudQuotasQuotaPreference#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudQuotasQuotaPreferenceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#timeouts GoogleCloudQuotasQuotaPreference#timeouts}

---

### GoogleCloudQuotasQuotaPreferenceQuotaConfig <a name="GoogleCloudQuotasQuotaPreferenceQuotaConfig" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.Initializer"></a>

```typescript
import { googleCloudQuotasQuotaPreference } from '@cdktf/provider-google-beta'

const googleCloudQuotasQuotaPreferenceQuotaConfig: googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue">preferredValue</a></code> | <code>string</code> | The preferred value. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | The annotations map for clients to store small amounts of arbitrary data. |

---

##### `preferredValue`<sup>Required</sup> <a name="preferredValue" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue"></a>

```typescript
public readonly preferredValue: string;
```

- *Type:* string

The preferred value.

Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#preferred_value GoogleCloudQuotasQuotaPreference#preferred_value}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The annotations map for clients to store small amounts of arbitrary data.

Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations.

An object containing a list of "key: value" pairs. Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#annotations GoogleCloudQuotasQuotaPreference#annotations}

---

### GoogleCloudQuotasQuotaPreferenceTimeouts <a name="GoogleCloudQuotasQuotaPreferenceTimeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.Initializer"></a>

```typescript
import { googleCloudQuotasQuotaPreference } from '@cdktf/provider-google-beta'

const googleCloudQuotasQuotaPreferenceTimeouts: googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#create GoogleCloudQuotasQuotaPreference#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#delete GoogleCloudQuotasQuotaPreference#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#update GoogleCloudQuotasQuotaPreference#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#create GoogleCloudQuotasQuotaPreference#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#delete GoogleCloudQuotasQuotaPreference#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_cloud_quotas_quota_preference#update GoogleCloudQuotasQuotaPreference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference <a name="GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudQuotasQuotaPreference } from '@cdktf/provider-google-beta'

new googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue">grantedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin">requestOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail">stateDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId">traceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput">preferredValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue">preferredValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grantedValue`<sup>Required</sup> <a name="grantedValue" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue"></a>

```typescript
public readonly grantedValue: string;
```

- *Type:* string

---

##### `requestOrigin`<sup>Required</sup> <a name="requestOrigin" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin"></a>

```typescript
public readonly requestOrigin: string;
```

- *Type:* string

---

##### `stateDetail`<sup>Required</sup> <a name="stateDetail" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail"></a>

```typescript
public readonly stateDetail: string;
```

- *Type:* string

---

##### `traceId`<sup>Required</sup> <a name="traceId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId"></a>

```typescript
public readonly traceId: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `preferredValueInput`<sup>Optional</sup> <a name="preferredValueInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput"></a>

```typescript
public readonly preferredValueInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `preferredValue`<sup>Required</sup> <a name="preferredValue" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue"></a>

```typescript
public readonly preferredValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudQuotasQuotaPreferenceQuotaConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

---


### GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference <a name="GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudQuotasQuotaPreference } from '@cdktf/provider-google-beta'

new googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudQuotasQuotaPreferenceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>

---



