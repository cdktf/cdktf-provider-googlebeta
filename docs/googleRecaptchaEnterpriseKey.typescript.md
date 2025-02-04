# `googleRecaptchaEnterpriseKey` Submodule <a name="`googleRecaptchaEnterpriseKey` Submodule" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRecaptchaEnterpriseKey <a name="GoogleRecaptchaEnterpriseKey" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key google_recaptcha_enterprise_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

new googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey(scope: Construct, id: string, config: GoogleRecaptchaEnterpriseKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig">GoogleRecaptchaEnterpriseKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig">GoogleRecaptchaEnterpriseKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putAndroidSettings">putAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putIosSettings">putIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTestingOptions">putTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWafSettings">putWafSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWebSettings">putWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetAndroidSettings">resetAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetIosSettings">resetIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetTestingOptions">resetTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetWafSettings">resetWafSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetWebSettings">resetWebSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAndroidSettings` <a name="putAndroidSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putAndroidSettings"></a>

```typescript
public putAndroidSettings(value: GoogleRecaptchaEnterpriseKeyAndroidSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putAndroidSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `putIosSettings` <a name="putIosSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putIosSettings"></a>

```typescript
public putIosSettings(value: GoogleRecaptchaEnterpriseKeyIosSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putIosSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a>

---

##### `putTestingOptions` <a name="putTestingOptions" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTestingOptions"></a>

```typescript
public putTestingOptions(value: GoogleRecaptchaEnterpriseKeyTestingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTestingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleRecaptchaEnterpriseKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a>

---

##### `putWafSettings` <a name="putWafSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWafSettings"></a>

```typescript
public putWafSettings(value: GoogleRecaptchaEnterpriseKeyWafSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWafSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a>

---

##### `putWebSettings` <a name="putWebSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWebSettings"></a>

```typescript
public putWebSettings(value: GoogleRecaptchaEnterpriseKeyWebSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWebSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a>

---

##### `resetAndroidSettings` <a name="resetAndroidSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetAndroidSettings"></a>

```typescript
public resetAndroidSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIosSettings` <a name="resetIosSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetIosSettings"></a>

```typescript
public resetIosSettings(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTestingOptions` <a name="resetTestingOptions" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetTestingOptions"></a>

```typescript
public resetTestingOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWafSettings` <a name="resetWafSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetWafSettings"></a>

```typescript
public resetWafSettings(): void
```

##### `resetWebSettings` <a name="resetWebSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetWebSettings"></a>

```typescript
public resetWebSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleRecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isConstruct"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformElement"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformResource"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleRecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleRecaptchaEnterpriseKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleRecaptchaEnterpriseKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleRecaptchaEnterpriseKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.androidSettings">androidSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference">GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.iosSettings">iosSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference">GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.testingOptions">testingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference">GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference">GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.wafSettings">wafSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference">GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.webSettings">webSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference">GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.androidSettingsInput">androidSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.iosSettingsInput">iosSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.testingOptionsInput">testingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.wafSettingsInput">wafSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.webSettingsInput">webSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `androidSettings`<sup>Required</sup> <a name="androidSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.androidSettings"></a>

```typescript
public readonly androidSettings: GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference">GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `iosSettings`<sup>Required</sup> <a name="iosSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.iosSettings"></a>

```typescript
public readonly iosSettings: GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference">GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `testingOptions`<sup>Required</sup> <a name="testingOptions" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.testingOptions"></a>

```typescript
public readonly testingOptions: GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference">GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference">GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference</a>

---

##### `wafSettings`<sup>Required</sup> <a name="wafSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.wafSettings"></a>

```typescript
public readonly wafSettings: GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference">GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference</a>

---

##### `webSettings`<sup>Required</sup> <a name="webSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.webSettings"></a>

```typescript
public readonly webSettings: GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference">GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference</a>

---

##### `androidSettingsInput`<sup>Optional</sup> <a name="androidSettingsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.androidSettingsInput"></a>

```typescript
public readonly androidSettingsInput: GoogleRecaptchaEnterpriseKeyAndroidSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iosSettingsInput`<sup>Optional</sup> <a name="iosSettingsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.iosSettingsInput"></a>

```typescript
public readonly iosSettingsInput: GoogleRecaptchaEnterpriseKeyIosSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `testingOptionsInput`<sup>Optional</sup> <a name="testingOptionsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.testingOptionsInput"></a>

```typescript
public readonly testingOptionsInput: GoogleRecaptchaEnterpriseKeyTestingOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleRecaptchaEnterpriseKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a>

---

##### `wafSettingsInput`<sup>Optional</sup> <a name="wafSettingsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.wafSettingsInput"></a>

```typescript
public readonly wafSettingsInput: GoogleRecaptchaEnterpriseKeyWafSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a>

---

##### `webSettingsInput`<sup>Optional</sup> <a name="webSettingsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.webSettingsInput"></a>

```typescript
public readonly webSettingsInput: GoogleRecaptchaEnterpriseKeyWebSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRecaptchaEnterpriseKeyAndroidSettings <a name="GoogleRecaptchaEnterpriseKeyAndroidSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

const googleRecaptchaEnterpriseKeyAndroidSettings: googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames">allowAllPackageNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, it means allowed_package_names will not be enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames">allowedPackageNames</a></code> | <code>string[]</code> | Android package names of apps allowed to use the key. Example: 'com.companyname.appname'. |

---

##### `allowAllPackageNames`<sup>Optional</sup> <a name="allowAllPackageNames" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames"></a>

```typescript
public readonly allowAllPackageNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, it means allowed_package_names will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#allow_all_package_names GoogleRecaptchaEnterpriseKey#allow_all_package_names}

---

##### `allowedPackageNames`<sup>Optional</sup> <a name="allowedPackageNames" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames"></a>

```typescript
public readonly allowedPackageNames: string[];
```

- *Type:* string[]

Android package names of apps allowed to use the key. Example: 'com.companyname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#allowed_package_names GoogleRecaptchaEnterpriseKey#allowed_package_names}

---

### GoogleRecaptchaEnterpriseKeyConfig <a name="GoogleRecaptchaEnterpriseKeyConfig" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

const googleRecaptchaEnterpriseKeyConfig: googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable display name of this key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.androidSettings">androidSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a></code> | android_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#id GoogleRecaptchaEnterpriseKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.iosSettings">iosSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a></code> | ios_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels). |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.testingOptions">testingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a></code> | testing_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.wafSettings">wafSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a></code> | waf_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.webSettings">webSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a></code> | web_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable display name of this key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#display_name GoogleRecaptchaEnterpriseKey#display_name}

---

##### `androidSettings`<sup>Optional</sup> <a name="androidSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.androidSettings"></a>

```typescript
public readonly androidSettings: GoogleRecaptchaEnterpriseKeyAndroidSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a>

android_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#android_settings GoogleRecaptchaEnterpriseKey#android_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#id GoogleRecaptchaEnterpriseKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iosSettings`<sup>Optional</sup> <a name="iosSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.iosSettings"></a>

```typescript
public readonly iosSettings: GoogleRecaptchaEnterpriseKeyIosSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a>

ios_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#ios_settings GoogleRecaptchaEnterpriseKey#ios_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#labels GoogleRecaptchaEnterpriseKey#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#project GoogleRecaptchaEnterpriseKey#project}

---

##### `testingOptions`<sup>Optional</sup> <a name="testingOptions" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.testingOptions"></a>

```typescript
public readonly testingOptions: GoogleRecaptchaEnterpriseKeyTestingOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a>

testing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#testing_options GoogleRecaptchaEnterpriseKey#testing_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleRecaptchaEnterpriseKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#timeouts GoogleRecaptchaEnterpriseKey#timeouts}

---

##### `wafSettings`<sup>Optional</sup> <a name="wafSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.wafSettings"></a>

```typescript
public readonly wafSettings: GoogleRecaptchaEnterpriseKeyWafSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a>

waf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#waf_settings GoogleRecaptchaEnterpriseKey#waf_settings}

---

##### `webSettings`<sup>Optional</sup> <a name="webSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.webSettings"></a>

```typescript
public readonly webSettings: GoogleRecaptchaEnterpriseKeyWebSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a>

web_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#web_settings GoogleRecaptchaEnterpriseKey#web_settings}

---

### GoogleRecaptchaEnterpriseKeyIosSettings <a name="GoogleRecaptchaEnterpriseKeyIosSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

const googleRecaptchaEnterpriseKeyIosSettings: googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds">allowAllBundleIds</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, it means allowed_bundle_ids will not be enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds">allowedBundleIds</a></code> | <code>string[]</code> | iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'. |

---

##### `allowAllBundleIds`<sup>Optional</sup> <a name="allowAllBundleIds" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds"></a>

```typescript
public readonly allowAllBundleIds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, it means allowed_bundle_ids will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#allow_all_bundle_ids GoogleRecaptchaEnterpriseKey#allow_all_bundle_ids}

---

##### `allowedBundleIds`<sup>Optional</sup> <a name="allowedBundleIds" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds"></a>

```typescript
public readonly allowedBundleIds: string[];
```

- *Type:* string[]

iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#allowed_bundle_ids GoogleRecaptchaEnterpriseKey#allowed_bundle_ids}

---

### GoogleRecaptchaEnterpriseKeyTestingOptions <a name="GoogleRecaptchaEnterpriseKeyTestingOptions" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

const googleRecaptchaEnterpriseKeyTestingOptions: googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions.property.testingChallenge">testingChallenge</a></code> | <code>string</code> | For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions.property.testingScore">testingScore</a></code> | <code>number</code> | All assessments for this Key will return this score. |

---

##### `testingChallenge`<sup>Optional</sup> <a name="testingChallenge" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions.property.testingChallenge"></a>

```typescript
public readonly testingChallenge: string;
```

- *Type:* string

For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE.

Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#testing_challenge GoogleRecaptchaEnterpriseKey#testing_challenge}

---

##### `testingScore`<sup>Optional</sup> <a name="testingScore" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions.property.testingScore"></a>

```typescript
public readonly testingScore: number;
```

- *Type:* number

All assessments for this Key will return this score.

Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#testing_score GoogleRecaptchaEnterpriseKey#testing_score}

---

### GoogleRecaptchaEnterpriseKeyTimeouts <a name="GoogleRecaptchaEnterpriseKeyTimeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

const googleRecaptchaEnterpriseKeyTimeouts: googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#create GoogleRecaptchaEnterpriseKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#delete GoogleRecaptchaEnterpriseKey#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#update GoogleRecaptchaEnterpriseKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#create GoogleRecaptchaEnterpriseKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#delete GoogleRecaptchaEnterpriseKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#update GoogleRecaptchaEnterpriseKey#update}.

---

### GoogleRecaptchaEnterpriseKeyWafSettings <a name="GoogleRecaptchaEnterpriseKeyWafSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

const googleRecaptchaEnterpriseKeyWafSettings: googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings.property.wafFeature">wafFeature</a></code> | <code>string</code> | Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings.property.wafService">wafService</a></code> | <code>string</code> | The WAF service that uses this key. Possible values: CA, FASTLY. |

---

##### `wafFeature`<sup>Required</sup> <a name="wafFeature" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings.property.wafFeature"></a>

```typescript
public readonly wafFeature: string;
```

- *Type:* string

Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#waf_feature GoogleRecaptchaEnterpriseKey#waf_feature}

---

##### `wafService`<sup>Required</sup> <a name="wafService" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings.property.wafService"></a>

```typescript
public readonly wafService: string;
```

- *Type:* string

The WAF service that uses this key. Possible values: CA, FASTLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#waf_service GoogleRecaptchaEnterpriseKey#waf_service}

---

### GoogleRecaptchaEnterpriseKeyWebSettings <a name="GoogleRecaptchaEnterpriseKeyWebSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

const googleRecaptchaEnterpriseKeyWebSettings: googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.integrationType">integrationType</a></code> | <code>string</code> | Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowAllDomains">allowAllDomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, it means allowed_domains will not be enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic">allowAmpTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | Domains or subdomains of websites allowed to use the key. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference">challengeSecurityPreference</a></code> | <code>string</code> | Settings for the frequency and difficulty at which this key triggers captcha challenges. |

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#integration_type GoogleRecaptchaEnterpriseKey#integration_type}

---

##### `allowAllDomains`<sup>Optional</sup> <a name="allowAllDomains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowAllDomains"></a>

```typescript
public readonly allowAllDomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, it means allowed_domains will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#allow_all_domains GoogleRecaptchaEnterpriseKey#allow_all_domains}

---

##### `allowAmpTraffic`<sup>Optional</sup> <a name="allowAmpTraffic" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic"></a>

```typescript
public readonly allowAmpTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites.

This is supported only for the SCORE integration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#allow_amp_traffic GoogleRecaptchaEnterpriseKey#allow_amp_traffic}

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]

Domains or subdomains of websites allowed to use the key.

All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#allowed_domains GoogleRecaptchaEnterpriseKey#allowed_domains}

---

##### `challengeSecurityPreference`<sup>Optional</sup> <a name="challengeSecurityPreference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference"></a>

```typescript
public readonly challengeSecurityPreference: string;
```

- *Type:* string

Settings for the frequency and difficulty at which this key triggers captcha challenges.

This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_recaptcha_enterprise_key#challenge_security_preference GoogleRecaptchaEnterpriseKey#challenge_security_preference}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference <a name="GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

new googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames">resetAllowAllPackageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames">resetAllowedPackageNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllPackageNames` <a name="resetAllowAllPackageNames" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames"></a>

```typescript
public resetAllowAllPackageNames(): void
```

##### `resetAllowedPackageNames` <a name="resetAllowedPackageNames" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames"></a>

```typescript
public resetAllowedPackageNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput">allowAllPackageNamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput">allowedPackageNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames">allowAllPackageNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames">allowedPackageNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAllPackageNamesInput`<sup>Optional</sup> <a name="allowAllPackageNamesInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput"></a>

```typescript
public readonly allowAllPackageNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedPackageNamesInput`<sup>Optional</sup> <a name="allowedPackageNamesInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput"></a>

```typescript
public readonly allowedPackageNamesInput: string[];
```

- *Type:* string[]

---

##### `allowAllPackageNames`<sup>Required</sup> <a name="allowAllPackageNames" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames"></a>

```typescript
public readonly allowAllPackageNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedPackageNames`<sup>Required</sup> <a name="allowedPackageNames" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames"></a>

```typescript
public readonly allowedPackageNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRecaptchaEnterpriseKeyAndroidSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a>

---


### GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference <a name="GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

new googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds">resetAllowAllBundleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds">resetAllowedBundleIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllBundleIds` <a name="resetAllowAllBundleIds" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds"></a>

```typescript
public resetAllowAllBundleIds(): void
```

##### `resetAllowedBundleIds` <a name="resetAllowedBundleIds" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds"></a>

```typescript
public resetAllowedBundleIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput">allowAllBundleIdsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput">allowedBundleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds">allowAllBundleIds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds">allowedBundleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAllBundleIdsInput`<sup>Optional</sup> <a name="allowAllBundleIdsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput"></a>

```typescript
public readonly allowAllBundleIdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedBundleIdsInput`<sup>Optional</sup> <a name="allowedBundleIdsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput"></a>

```typescript
public readonly allowedBundleIdsInput: string[];
```

- *Type:* string[]

---

##### `allowAllBundleIds`<sup>Required</sup> <a name="allowAllBundleIds" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds"></a>

```typescript
public readonly allowAllBundleIds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedBundleIds`<sup>Required</sup> <a name="allowedBundleIds" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds"></a>

```typescript
public readonly allowedBundleIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRecaptchaEnterpriseKeyIosSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a>

---


### GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference <a name="GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

new googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge">resetTestingChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore">resetTestingScore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestingChallenge` <a name="resetTestingChallenge" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge"></a>

```typescript
public resetTestingChallenge(): void
```

##### `resetTestingScore` <a name="resetTestingScore" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore"></a>

```typescript
public resetTestingScore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput">testingChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput">testingScoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge">testingChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore">testingScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `testingChallengeInput`<sup>Optional</sup> <a name="testingChallengeInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput"></a>

```typescript
public readonly testingChallengeInput: string;
```

- *Type:* string

---

##### `testingScoreInput`<sup>Optional</sup> <a name="testingScoreInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput"></a>

```typescript
public readonly testingScoreInput: number;
```

- *Type:* number

---

##### `testingChallenge`<sup>Required</sup> <a name="testingChallenge" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge"></a>

```typescript
public readonly testingChallenge: string;
```

- *Type:* string

---

##### `testingScore`<sup>Required</sup> <a name="testingScore" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore"></a>

```typescript
public readonly testingScore: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRecaptchaEnterpriseKeyTestingOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a>

---


### GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference <a name="GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

new googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleRecaptchaEnterpriseKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a>

---


### GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference <a name="GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

new googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeatureInput">wafFeatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafServiceInput">wafServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeature">wafFeature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafService">wafService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `wafFeatureInput`<sup>Optional</sup> <a name="wafFeatureInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeatureInput"></a>

```typescript
public readonly wafFeatureInput: string;
```

- *Type:* string

---

##### `wafServiceInput`<sup>Optional</sup> <a name="wafServiceInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafServiceInput"></a>

```typescript
public readonly wafServiceInput: string;
```

- *Type:* string

---

##### `wafFeature`<sup>Required</sup> <a name="wafFeature" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeature"></a>

```typescript
public readonly wafFeature: string;
```

- *Type:* string

---

##### `wafService`<sup>Required</sup> <a name="wafService" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafService"></a>

```typescript
public readonly wafService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRecaptchaEnterpriseKeyWafSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a>

---


### GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference <a name="GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer"></a>

```typescript
import { googleRecaptchaEnterpriseKey } from '@cdktf/provider-google-beta'

new googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains">resetAllowAllDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic">resetAllowAmpTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference">resetChallengeSecurityPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllDomains` <a name="resetAllowAllDomains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains"></a>

```typescript
public resetAllowAllDomains(): void
```

##### `resetAllowAmpTraffic` <a name="resetAllowAmpTraffic" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic"></a>

```typescript
public resetAllowAmpTraffic(): void
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains"></a>

```typescript
public resetAllowedDomains(): void
```

##### `resetChallengeSecurityPreference` <a name="resetChallengeSecurityPreference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference"></a>

```typescript
public resetChallengeSecurityPreference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput">allowAllDomainsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput">allowAmpTrafficInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput">challengeSecurityPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput">integrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains">allowAllDomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic">allowAmpTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference">challengeSecurityPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAllDomainsInput`<sup>Optional</sup> <a name="allowAllDomainsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput"></a>

```typescript
public readonly allowAllDomainsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAmpTrafficInput`<sup>Optional</sup> <a name="allowAmpTrafficInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput"></a>

```typescript
public readonly allowAmpTrafficInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput"></a>

```typescript
public readonly allowedDomainsInput: string[];
```

- *Type:* string[]

---

##### `challengeSecurityPreferenceInput`<sup>Optional</sup> <a name="challengeSecurityPreferenceInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput"></a>

```typescript
public readonly challengeSecurityPreferenceInput: string;
```

- *Type:* string

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput"></a>

```typescript
public readonly integrationTypeInput: string;
```

- *Type:* string

---

##### `allowAllDomains`<sup>Required</sup> <a name="allowAllDomains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains"></a>

```typescript
public readonly allowAllDomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAmpTraffic`<sup>Required</sup> <a name="allowAmpTraffic" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic"></a>

```typescript
public readonly allowAmpTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]

---

##### `challengeSecurityPreference`<sup>Required</sup> <a name="challengeSecurityPreference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference"></a>

```typescript
public readonly challengeSecurityPreference: string;
```

- *Type:* string

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRecaptchaEnterpriseKeyWebSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a>

---



