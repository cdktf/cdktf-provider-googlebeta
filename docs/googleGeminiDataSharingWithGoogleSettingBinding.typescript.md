# `googleGeminiDataSharingWithGoogleSettingBinding` Submodule <a name="`googleGeminiDataSharingWithGoogleSettingBinding` Submodule" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiDataSharingWithGoogleSettingBinding <a name="GoogleGeminiDataSharingWithGoogleSettingBinding" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding google_gemini_data_sharing_with_google_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer"></a>

```typescript
import { googleGeminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google-beta'

new googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding(scope: Construct, id: string, config: GoogleGeminiDataSharingWithGoogleSettingBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig">GoogleGeminiDataSharingWithGoogleSettingBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig">GoogleGeminiDataSharingWithGoogleSettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProduct` <a name="resetProduct" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetProduct"></a>

```typescript
public resetProduct(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiDataSharingWithGoogleSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isConstruct"></a>

```typescript
import { googleGeminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google-beta'

googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformElement"></a>

```typescript
import { googleGeminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google-beta'

googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformResource"></a>

```typescript
import { googleGeminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google-beta'

googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport"></a>

```typescript
import { googleGeminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google-beta'

googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleGeminiDataSharingWithGoogleSettingBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGeminiDataSharingWithGoogleSettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGeminiDataSharingWithGoogleSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiDataSharingWithGoogleSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference">GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingIdInput">dataSharingWithGoogleSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.settingBindingIdInput">settingBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.settingBindingId">settingBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference">GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="dataSharingWithGoogleSettingIdInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingIdInput"></a>

```typescript
public readonly dataSharingWithGoogleSettingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `settingBindingIdInput`<sup>Optional</sup> <a name="settingBindingIdInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.settingBindingIdInput"></a>

```typescript
public readonly settingBindingIdInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingId"></a>

```typescript
public readonly dataSharingWithGoogleSettingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.settingBindingId"></a>

```typescript
public readonly settingBindingId: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiDataSharingWithGoogleSettingBindingConfig <a name="GoogleGeminiDataSharingWithGoogleSettingBindingConfig" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.Initializer"></a>

```typescript
import { googleGeminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google-beta'

const googleGeminiDataSharingWithGoogleSettingBindingConfig: googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.settingBindingId">settingBindingId</a></code> | <code>string</code> | Required. Id of the setting binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.target">target</a></code> | <code>string</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#id GoogleGeminiDataSharingWithGoogleSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.product">product</a></code> | <code>string</code> | Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#project GoogleGeminiDataSharingWithGoogleSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.dataSharingWithGoogleSettingId"></a>

```typescript
public readonly dataSharingWithGoogleSettingId: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#data_sharing_with_google_setting_id GoogleGeminiDataSharingWithGoogleSettingBinding#data_sharing_with_google_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.settingBindingId"></a>

```typescript
public readonly settingBindingId: string;
```

- *Type:* string

Required. Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#setting_binding_id GoogleGeminiDataSharingWithGoogleSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#target GoogleGeminiDataSharingWithGoogleSettingBinding#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#id GoogleGeminiDataSharingWithGoogleSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#labels GoogleGeminiDataSharingWithGoogleSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#location GoogleGeminiDataSharingWithGoogleSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#product GoogleGeminiDataSharingWithGoogleSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#project GoogleGeminiDataSharingWithGoogleSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#timeouts GoogleGeminiDataSharingWithGoogleSettingBinding#timeouts}

---

### GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts <a name="GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.Initializer"></a>

```typescript
import { googleGeminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google-beta'

const googleGeminiDataSharingWithGoogleSettingBindingTimeouts: googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#create GoogleGeminiDataSharingWithGoogleSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#delete GoogleGeminiDataSharingWithGoogleSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#update GoogleGeminiDataSharingWithGoogleSettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#create GoogleGeminiDataSharingWithGoogleSettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#delete GoogleGeminiDataSharingWithGoogleSettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#update GoogleGeminiDataSharingWithGoogleSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference <a name="GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGeminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google-beta'

new googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---



