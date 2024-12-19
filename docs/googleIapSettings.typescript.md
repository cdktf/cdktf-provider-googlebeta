# `googleIapSettings` Submodule <a name="`googleIapSettings` Submodule" id="@cdktf/provider-google-beta.googleIapSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapSettings <a name="GoogleIapSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings google_iap_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettings(scope: Construct, id: string, config: GoogleIapSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig">GoogleIapSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig">GoogleIapSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings">putAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings">putApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetAccessSettings">resetAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetApplicationSettings">resetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessSettings` <a name="putAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings"></a>

```typescript
public putAccessSettings(value: GoogleIapSettingsAccessSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---

##### `putApplicationSettings` <a name="putApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings"></a>

```typescript
public putApplicationSettings(value: GoogleIapSettingsApplicationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIapSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

---

##### `resetAccessSettings` <a name="resetAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetAccessSettings"></a>

```typescript
public resetAccessSettings(): void
```

##### `resetApplicationSettings` <a name="resetApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetApplicationSettings"></a>

```typescript
public resetApplicationSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

googleIapSettings.GoogleIapSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

googleIapSettings.GoogleIapSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

googleIapSettings.GoogleIapSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

googleIapSettings.GoogleIapSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIapSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference">GoogleIapSettingsAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference">GoogleIapSettingsApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference">GoogleIapSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettingsInput">accessSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettingsInput">applicationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessSettings`<sup>Required</sup> <a name="accessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettings"></a>

```typescript
public readonly accessSettings: GoogleIapSettingsAccessSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference">GoogleIapSettingsAccessSettingsOutputReference</a>

---

##### `applicationSettings`<sup>Required</sup> <a name="applicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettings"></a>

```typescript
public readonly applicationSettings: GoogleIapSettingsApplicationSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference">GoogleIapSettingsApplicationSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIapSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference">GoogleIapSettingsTimeoutsOutputReference</a>

---

##### `accessSettingsInput`<sup>Optional</sup> <a name="accessSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettingsInput"></a>

```typescript
public readonly accessSettingsInput: GoogleIapSettingsAccessSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---

##### `applicationSettingsInput`<sup>Optional</sup> <a name="applicationSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettingsInput"></a>

```typescript
public readonly applicationSettingsInput: GoogleIapSettingsApplicationSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIapSettingsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapSettingsAccessSettings <a name="GoogleIapSettingsAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsAccessSettings: googleIapSettings.GoogleIapSettingsAccessSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.allowedDomainsSettings">allowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | allowed_domains_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.corsSettings">corsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | cors_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.gcipSettings">gcipSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | gcip_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.identitySources">identitySources</a></code> | <code>string[]</code> | Identity sources that IAP can use to authenticate the end user. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.oauthSettings">oauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | oauth_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.reauthSettings">reauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | reauth_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.workforceIdentitySettings">workforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | workforce_identity_settings block. |

---

##### `allowedDomainsSettings`<sup>Optional</sup> <a name="allowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.allowedDomainsSettings"></a>

```typescript
public readonly allowedDomainsSettings: GoogleIapSettingsAccessSettingsAllowedDomainsSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

allowed_domains_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#allowed_domains_settings GoogleIapSettings#allowed_domains_settings}

---

##### `corsSettings`<sup>Optional</sup> <a name="corsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.corsSettings"></a>

```typescript
public readonly corsSettings: GoogleIapSettingsAccessSettingsCorsSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#cors_settings GoogleIapSettings#cors_settings}

---

##### `gcipSettings`<sup>Optional</sup> <a name="gcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.gcipSettings"></a>

```typescript
public readonly gcipSettings: GoogleIapSettingsAccessSettingsGcipSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

gcip_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#gcip_settings GoogleIapSettings#gcip_settings}

---

##### `identitySources`<sup>Optional</sup> <a name="identitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.identitySources"></a>

```typescript
public readonly identitySources: string[];
```

- *Type:* string[]

Identity sources that IAP can use to authenticate the end user.

Only one identity source
can be configured. The possible values are:

* 'WORKFORCE_IDENTITY_FEDERATION': Use external identities set up on Google Cloud Workforce
  				     Identity Federation. Possible values: ["WORKFORCE_IDENTITY_FEDERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#identity_sources GoogleIapSettings#identity_sources}

---

##### `oauthSettings`<sup>Optional</sup> <a name="oauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.oauthSettings"></a>

```typescript
public readonly oauthSettings: GoogleIapSettingsAccessSettingsOauthSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

oauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#oauth_settings GoogleIapSettings#oauth_settings}

---

##### `reauthSettings`<sup>Optional</sup> <a name="reauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.reauthSettings"></a>

```typescript
public readonly reauthSettings: GoogleIapSettingsAccessSettingsReauthSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

reauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#reauth_settings GoogleIapSettings#reauth_settings}

---

##### `workforceIdentitySettings`<sup>Optional</sup> <a name="workforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.workforceIdentitySettings"></a>

```typescript
public readonly workforceIdentitySettings: GoogleIapSettingsAccessSettingsWorkforceIdentitySettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

workforce_identity_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#workforce_identity_settings GoogleIapSettings#workforce_identity_settings}

---

### GoogleIapSettingsAccessSettingsAllowedDomainsSettings <a name="GoogleIapSettingsAccessSettingsAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsAccessSettingsAllowedDomainsSettings: googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.domains">domains</a></code> | <code>string[]</code> | List of trusted domains. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Configuration for customers to opt in for the feature. |

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

List of trusted domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#domains GoogleIapSettings#domains}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Configuration for customers to opt in for the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#enable GoogleIapSettings#enable}

---

### GoogleIapSettingsAccessSettingsCorsSettings <a name="GoogleIapSettingsAccessSettingsCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsAccessSettingsCorsSettings: googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.property.allowHttpOptions">allowHttpOptions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Configuration to allow HTTP OPTIONS calls to skip authorization. |

---

##### `allowHttpOptions`<sup>Optional</sup> <a name="allowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.property.allowHttpOptions"></a>

```typescript
public readonly allowHttpOptions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Configuration to allow HTTP OPTIONS calls to skip authorization.

If undefined, IAP will not apply any special logic to OPTIONS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#allow_http_options GoogleIapSettings#allow_http_options}

---

### GoogleIapSettingsAccessSettingsGcipSettings <a name="GoogleIapSettingsAccessSettingsGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsAccessSettingsGcipSettings: googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.loginPageUri">loginPageUri</a></code> | <code>string</code> | Login page URI associated with the GCIP tenants. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.tenantIds">tenantIds</a></code> | <code>string[]</code> | GCIP tenant ids that are linked to the IAP resource. |

---

##### `loginPageUri`<sup>Optional</sup> <a name="loginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.loginPageUri"></a>

```typescript
public readonly loginPageUri: string;
```

- *Type:* string

Login page URI associated with the GCIP tenants.

Typically, all resources within
the same project share the same login page, though it could be overridden at the
sub resource level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#login_page_uri GoogleIapSettings#login_page_uri}

---

##### `tenantIds`<sup>Optional</sup> <a name="tenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.tenantIds"></a>

```typescript
public readonly tenantIds: string[];
```

- *Type:* string[]

GCIP tenant ids that are linked to the IAP resource.

tenantIds could be a string
beginning with a number character to indicate authenticating with GCIP tenant flow,
or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow
is used, tenantIds should only contain one single element, while for tenant flow,
tenantIds can contain multiple elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#tenant_ids GoogleIapSettings#tenant_ids}

---

### GoogleIapSettingsAccessSettingsOauthSettings <a name="GoogleIapSettingsAccessSettingsOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsAccessSettingsOauthSettings: googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.loginHint">loginHint</a></code> | <code>string</code> | Domain hint to send as hd=? |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.programmaticClients">programmaticClients</a></code> | <code>string[]</code> | List of client ids allowed to use IAP programmatically. |

---

##### `loginHint`<sup>Optional</sup> <a name="loginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.loginHint"></a>

```typescript
public readonly loginHint: string;
```

- *Type:* string

Domain hint to send as hd=?

parameter in OAuth request flow.
Enables redirect to primary IDP by skipping Google's login screen.
(https://developers.google.com/identity/protocols/OpenIDConnect#hd-param)
Note: IAP does not verify that the id token's hd claim matches this value
since access behavior is managed by IAM policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#login_hint GoogleIapSettings#login_hint}

---

##### `programmaticClients`<sup>Optional</sup> <a name="programmaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.programmaticClients"></a>

```typescript
public readonly programmaticClients: string[];
```

- *Type:* string[]

List of client ids allowed to use IAP programmatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#programmatic_clients GoogleIapSettings#programmatic_clients}

---

### GoogleIapSettingsAccessSettingsReauthSettings <a name="GoogleIapSettingsAccessSettingsReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsAccessSettingsReauthSettings: googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.maxAge">maxAge</a></code> | <code>string</code> | Reauth session lifetime, how long before a user has to reauthenticate again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.method">method</a></code> | <code>string</code> | Reauth method requested. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.policyType">policyType</a></code> | <code>string</code> | How IAP determines the effective policy in cases of hierarchical policies. |

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.maxAge"></a>

```typescript
public readonly maxAge: string;
```

- *Type:* string

Reauth session lifetime, how long before a user has to reauthenticate again.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#max_age GoogleIapSettings#max_age}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Reauth method requested. The possible values are:.

* 'LOGIN': Prompts the user to log in again.
* 'SECURE_KEY': User must use their secure key 2nd factor device.
* 'ENROLLED_SECOND_FACTORS': User can use any enabled 2nd factor. Possible values: ["LOGIN", "SECURE_KEY", "ENROLLED_SECOND_FACTORS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#method GoogleIapSettings#method}

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

How IAP determines the effective policy in cases of hierarchical policies.

Policies are merged from higher in the hierarchy to lower in the hierarchy.
The possible values are:

* 'MINIMUM': This policy acts as a minimum to other policies, lower in the hierarchy.
		   Effective policy may only be the same or stricter.
* 'DEFAULT': This policy acts as a default if no other reauth policy is set. Possible values: ["MINIMUM", "DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#policy_type GoogleIapSettings#policy_type}

---

### GoogleIapSettingsAccessSettingsWorkforceIdentitySettings <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsAccessSettingsWorkforceIdentitySettings: googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2">oauth2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | oauth2 block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools">workforcePools</a></code> | <code>string[]</code> | The workforce pool resources. Only one workforce pool is accepted. |

---

##### `oauth2`<sup>Optional</sup> <a name="oauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2"></a>

```typescript
public readonly oauth2: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

oauth2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#oauth2 GoogleIapSettings#oauth2}

---

##### `workforcePools`<sup>Optional</sup> <a name="workforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools"></a>

```typescript
public readonly workforcePools: string[];
```

- *Type:* string[]

The workforce pool resources. Only one workforce pool is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#workforce_pools GoogleIapSettings#workforce_pools}

---

### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2: googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId">clientId</a></code> | <code>string</code> | The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret">clientSecret</a></code> | <code>string</code> | Input only. The OAuth 2.0 client secret created while registering the client ID. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#client_id GoogleIapSettings#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Input only. The OAuth 2.0 client secret created while registering the client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#client_secret GoogleIapSettings#client_secret}

---

### GoogleIapSettingsApplicationSettings <a name="GoogleIapSettingsApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsApplicationSettings: googleIapSettings.GoogleIapSettingsApplicationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.accessDeniedPageSettings">accessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | access_denied_page_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.attributePropagationSettings">attributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | attribute_propagation_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.cookieDomain">cookieDomain</a></code> | <code>string</code> | The Domain value to set for cookies generated by IAP. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.csmSettings">csmSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | csm_settings block. |

---

##### `accessDeniedPageSettings`<sup>Optional</sup> <a name="accessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.accessDeniedPageSettings"></a>

```typescript
public readonly accessDeniedPageSettings: GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

access_denied_page_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#access_denied_page_settings GoogleIapSettings#access_denied_page_settings}

---

##### `attributePropagationSettings`<sup>Optional</sup> <a name="attributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.attributePropagationSettings"></a>

```typescript
public readonly attributePropagationSettings: GoogleIapSettingsApplicationSettingsAttributePropagationSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

attribute_propagation_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#attribute_propagation_settings GoogleIapSettings#attribute_propagation_settings}

---

##### `cookieDomain`<sup>Optional</sup> <a name="cookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.cookieDomain"></a>

```typescript
public readonly cookieDomain: string;
```

- *Type:* string

The Domain value to set for cookies generated by IAP.

This value is not validated by the API,
but will be ignored at runtime if invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#cookie_domain GoogleIapSettings#cookie_domain}

---

##### `csmSettings`<sup>Optional</sup> <a name="csmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.csmSettings"></a>

```typescript
public readonly csmSettings: GoogleIapSettingsApplicationSettingsCsmSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

csm_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#csm_settings GoogleIapSettings#csm_settings}

---

### GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings <a name="GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsApplicationSettingsAccessDeniedPageSettings: googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri">accessDeniedPageUri</a></code> | <code>string</code> | The URI to be redirected to when access is denied. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri">generateTroubleshootingUri</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to generate a troubleshooting URL on access denied events to this application. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled">remediationTokenGenerationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to generate remediation token on access denied events to this application. |

---

##### `accessDeniedPageUri`<sup>Optional</sup> <a name="accessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri"></a>

```typescript
public readonly accessDeniedPageUri: string;
```

- *Type:* string

The URI to be redirected to when access is denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#access_denied_page_uri GoogleIapSettings#access_denied_page_uri}

---

##### `generateTroubleshootingUri`<sup>Optional</sup> <a name="generateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri"></a>

```typescript
public readonly generateTroubleshootingUri: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to generate a troubleshooting URL on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#generate_troubleshooting_uri GoogleIapSettings#generate_troubleshooting_uri}

---

##### `remediationTokenGenerationEnabled`<sup>Optional</sup> <a name="remediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled"></a>

```typescript
public readonly remediationTokenGenerationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to generate remediation token on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#remediation_token_generation_enabled GoogleIapSettings#remediation_token_generation_enabled}

---

### GoogleIapSettingsApplicationSettingsAttributePropagationSettings <a name="GoogleIapSettingsApplicationSettingsAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsApplicationSettingsAttributePropagationSettings: googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the provided attribute propagation settings should be evaluated on user requests. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.expression">expression</a></code> | <code>string</code> | Raw string CEL expression. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials">outputCredentials</a></code> | <code>string[]</code> | Which output credentials attributes selected by the CEL expression should be propagated in. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the provided attribute propagation settings should be evaluated on user requests.

If set to true, attributes returned from the expression will be propagated in the set output credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#enable GoogleIapSettings#enable}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Raw string CEL expression.

Must return a list of attributes. A maximum of 45 attributes can
be selected. Expressions can select different attribute types from attributes:
attributes.saml_attributes, attributes.iap_attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#expression GoogleIapSettings#expression}

---

##### `outputCredentials`<sup>Optional</sup> <a name="outputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials"></a>

```typescript
public readonly outputCredentials: string[];
```

- *Type:* string[]

Which output credentials attributes selected by the CEL expression should be propagated in.

All attributes will be fully duplicated in each selected output credential.
Possible values are:

* 'HEADER': Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
* 'JWT': Propagate attributes in the JWT of the form:
         "additional_claims": { "my_attribute": ["value1", "value2"] }
* 'RCTOKEN': Propagate attributes in the RCToken of the form: "
             additional_claims": { "my_attribute": ["value1", "value2"] } Possible values: ["HEADER", "JWT", "RCTOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#output_credentials GoogleIapSettings#output_credentials}

---

### GoogleIapSettingsApplicationSettingsCsmSettings <a name="GoogleIapSettingsApplicationSettingsCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsApplicationSettingsCsmSettings: googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.property.rctokenAud">rctokenAud</a></code> | <code>string</code> | Audience claim set in the generated RCToken. This value is not validated by IAP. |

---

##### `rctokenAud`<sup>Optional</sup> <a name="rctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.property.rctokenAud"></a>

```typescript
public readonly rctokenAud: string;
```

- *Type:* string

Audience claim set in the generated RCToken. This value is not validated by IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#rctoken_aud GoogleIapSettings#rctoken_aud}

---

### GoogleIapSettingsConfig <a name="GoogleIapSettingsConfig" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsConfig: googleIapSettings.GoogleIapSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.name">name</a></code> | <code>string</code> | The resource name of the IAP protected resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#id GoogleIapSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the IAP protected resource.

Name can have below resources:
* organizations/{organization_id}
* folders/{folder_id}
* projects/{projects_id}
* projects/{projects_id}/iap_web
* projects/{projects_id}/iap_web/compute
* projects/{projects_id}/iap_web/compute-{region}
* projects/{projects_id}/iap_web/compute/service/{service_id}
* projects/{projects_id}/iap_web/compute-{region}/service/{service_id}
* projects/{projects_id}/iap_web/appengine-{app_id}
* projects/{projects_id}/iap_web/appengine-{app_id}/service/{service_id}
* projects/{projects_id}/iap_web/appengine-{app_id}/service/{service_id}/version/{version_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#name GoogleIapSettings#name}

---

##### `accessSettings`<sup>Optional</sup> <a name="accessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.accessSettings"></a>

```typescript
public readonly accessSettings: GoogleIapSettingsAccessSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#access_settings GoogleIapSettings#access_settings}

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.applicationSettings"></a>

```typescript
public readonly applicationSettings: GoogleIapSettingsApplicationSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#application_settings GoogleIapSettings#application_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#id GoogleIapSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIapSettingsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#timeouts GoogleIapSettings#timeouts}

---

### GoogleIapSettingsTimeouts <a name="GoogleIapSettingsTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

const googleIapSettingsTimeouts: googleIapSettings.GoogleIapSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#create GoogleIapSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#delete GoogleIapSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#update GoogleIapSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#create GoogleIapSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#delete GoogleIapSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#update GoogleIapSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains"></a>

```typescript
public resetDomains(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsAccessSettingsAllowedDomainsSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---


### GoogleIapSettingsAccessSettingsCorsSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsCorsSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions">resetAllowHttpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowHttpOptions` <a name="resetAllowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions"></a>

```typescript
public resetAllowHttpOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput">allowHttpOptionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions">allowHttpOptions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowHttpOptionsInput`<sup>Optional</sup> <a name="allowHttpOptionsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput"></a>

```typescript
public readonly allowHttpOptionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowHttpOptions`<sup>Required</sup> <a name="allowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions"></a>

```typescript
public readonly allowHttpOptions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsAccessSettingsCorsSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---


### GoogleIapSettingsAccessSettingsGcipSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsGcipSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri">resetLoginPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds">resetTenantIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoginPageUri` <a name="resetLoginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri"></a>

```typescript
public resetLoginPageUri(): void
```

##### `resetTenantIds` <a name="resetTenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds"></a>

```typescript
public resetTenantIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput">loginPageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput">tenantIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri">loginPageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds">tenantIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loginPageUriInput`<sup>Optional</sup> <a name="loginPageUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput"></a>

```typescript
public readonly loginPageUriInput: string;
```

- *Type:* string

---

##### `tenantIdsInput`<sup>Optional</sup> <a name="tenantIdsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput"></a>

```typescript
public readonly tenantIdsInput: string[];
```

- *Type:* string[]

---

##### `loginPageUri`<sup>Required</sup> <a name="loginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri"></a>

```typescript
public readonly loginPageUri: string;
```

- *Type:* string

---

##### `tenantIds`<sup>Required</sup> <a name="tenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds"></a>

```typescript
public readonly tenantIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsAccessSettingsGcipSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---


### GoogleIapSettingsAccessSettingsOauthSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsOauthSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint">resetLoginHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients">resetProgrammaticClients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoginHint` <a name="resetLoginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint"></a>

```typescript
public resetLoginHint(): void
```

##### `resetProgrammaticClients` <a name="resetProgrammaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients"></a>

```typescript
public resetProgrammaticClients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput">loginHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput">programmaticClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint">loginHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients">programmaticClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loginHintInput`<sup>Optional</sup> <a name="loginHintInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput"></a>

```typescript
public readonly loginHintInput: string;
```

- *Type:* string

---

##### `programmaticClientsInput`<sup>Optional</sup> <a name="programmaticClientsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput"></a>

```typescript
public readonly programmaticClientsInput: string[];
```

- *Type:* string[]

---

##### `loginHint`<sup>Required</sup> <a name="loginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint"></a>

```typescript
public readonly loginHint: string;
```

- *Type:* string

---

##### `programmaticClients`<sup>Required</sup> <a name="programmaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients"></a>

```typescript
public readonly programmaticClients: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsAccessSettingsOauthSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---


### GoogleIapSettingsAccessSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings">putAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings">putCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings">putGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings">putOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings">putReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings">putWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings">resetAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetCorsSettings">resetCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetGcipSettings">resetGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetIdentitySources">resetIdentitySources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetOauthSettings">resetOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetReauthSettings">resetReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings">resetWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedDomainsSettings` <a name="putAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings"></a>

```typescript
public putAllowedDomainsSettings(value: GoogleIapSettingsAccessSettingsAllowedDomainsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `putCorsSettings` <a name="putCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings"></a>

```typescript
public putCorsSettings(value: GoogleIapSettingsAccessSettingsCorsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---

##### `putGcipSettings` <a name="putGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings"></a>

```typescript
public putGcipSettings(value: GoogleIapSettingsAccessSettingsGcipSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---

##### `putOauthSettings` <a name="putOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings"></a>

```typescript
public putOauthSettings(value: GoogleIapSettingsAccessSettingsOauthSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---

##### `putReauthSettings` <a name="putReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings"></a>

```typescript
public putReauthSettings(value: GoogleIapSettingsAccessSettingsReauthSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---

##### `putWorkforceIdentitySettings` <a name="putWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings"></a>

```typescript
public putWorkforceIdentitySettings(value: GoogleIapSettingsAccessSettingsWorkforceIdentitySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `resetAllowedDomainsSettings` <a name="resetAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings"></a>

```typescript
public resetAllowedDomainsSettings(): void
```

##### `resetCorsSettings` <a name="resetCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetCorsSettings"></a>

```typescript
public resetCorsSettings(): void
```

##### `resetGcipSettings` <a name="resetGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetGcipSettings"></a>

```typescript
public resetGcipSettings(): void
```

##### `resetIdentitySources` <a name="resetIdentitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetIdentitySources"></a>

```typescript
public resetIdentitySources(): void
```

##### `resetOauthSettings` <a name="resetOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetOauthSettings"></a>

```typescript
public resetOauthSettings(): void
```

##### `resetReauthSettings` <a name="resetReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetReauthSettings"></a>

```typescript
public resetReauthSettings(): void
```

##### `resetWorkforceIdentitySettings` <a name="resetWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings"></a>

```typescript
public resetWorkforceIdentitySettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings">allowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettings">corsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference">GoogleIapSettingsAccessSettingsCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettings">gcipSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference">GoogleIapSettingsAccessSettingsGcipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettings">oauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference">GoogleIapSettingsAccessSettingsOauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettings">reauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference">GoogleIapSettingsAccessSettingsReauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings">workforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput">allowedDomainsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettingsInput">corsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettingsInput">gcipSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySourcesInput">identitySourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettingsInput">oauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettingsInput">reauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput">workforceIdentitySettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySources">identitySources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedDomainsSettings`<sup>Required</sup> <a name="allowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings"></a>

```typescript
public readonly allowedDomainsSettings: GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a>

---

##### `corsSettings`<sup>Required</sup> <a name="corsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettings"></a>

```typescript
public readonly corsSettings: GoogleIapSettingsAccessSettingsCorsSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference">GoogleIapSettingsAccessSettingsCorsSettingsOutputReference</a>

---

##### `gcipSettings`<sup>Required</sup> <a name="gcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettings"></a>

```typescript
public readonly gcipSettings: GoogleIapSettingsAccessSettingsGcipSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference">GoogleIapSettingsAccessSettingsGcipSettingsOutputReference</a>

---

##### `oauthSettings`<sup>Required</sup> <a name="oauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettings"></a>

```typescript
public readonly oauthSettings: GoogleIapSettingsAccessSettingsOauthSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference">GoogleIapSettingsAccessSettingsOauthSettingsOutputReference</a>

---

##### `reauthSettings`<sup>Required</sup> <a name="reauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettings"></a>

```typescript
public readonly reauthSettings: GoogleIapSettingsAccessSettingsReauthSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference">GoogleIapSettingsAccessSettingsReauthSettingsOutputReference</a>

---

##### `workforceIdentitySettings`<sup>Required</sup> <a name="workforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings"></a>

```typescript
public readonly workforceIdentitySettings: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a>

---

##### `allowedDomainsSettingsInput`<sup>Optional</sup> <a name="allowedDomainsSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput"></a>

```typescript
public readonly allowedDomainsSettingsInput: GoogleIapSettingsAccessSettingsAllowedDomainsSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `corsSettingsInput`<sup>Optional</sup> <a name="corsSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettingsInput"></a>

```typescript
public readonly corsSettingsInput: GoogleIapSettingsAccessSettingsCorsSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---

##### `gcipSettingsInput`<sup>Optional</sup> <a name="gcipSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettingsInput"></a>

```typescript
public readonly gcipSettingsInput: GoogleIapSettingsAccessSettingsGcipSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---

##### `identitySourcesInput`<sup>Optional</sup> <a name="identitySourcesInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySourcesInput"></a>

```typescript
public readonly identitySourcesInput: string[];
```

- *Type:* string[]

---

##### `oauthSettingsInput`<sup>Optional</sup> <a name="oauthSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettingsInput"></a>

```typescript
public readonly oauthSettingsInput: GoogleIapSettingsAccessSettingsOauthSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---

##### `reauthSettingsInput`<sup>Optional</sup> <a name="reauthSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettingsInput"></a>

```typescript
public readonly reauthSettingsInput: GoogleIapSettingsAccessSettingsReauthSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---

##### `workforceIdentitySettingsInput`<sup>Optional</sup> <a name="workforceIdentitySettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput"></a>

```typescript
public readonly workforceIdentitySettingsInput: GoogleIapSettingsAccessSettingsWorkforceIdentitySettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `identitySources`<sup>Required</sup> <a name="identitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySources"></a>

```typescript
public readonly identitySources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsAccessSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---


### GoogleIapSettingsAccessSettingsReauthSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsReauthSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge">maxAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsAccessSettingsReauthSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---


### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256">clientSecretSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientSecretSha256`<sup>Required</sup> <a name="clientSecretSha256" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256"></a>

```typescript
public readonly clientSecretSha256: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---


### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2">putOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2">resetOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools">resetWorkforcePools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth2` <a name="putOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2"></a>

```typescript
public putOauth2(value: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `resetOauth2` <a name="resetOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2"></a>

```typescript
public resetOauth2(): void
```

##### `resetWorkforcePools` <a name="resetWorkforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools"></a>

```typescript
public resetWorkforcePools(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2">oauth2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input">oauth2Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput">workforcePoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools">workforcePools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauth2`<sup>Required</sup> <a name="oauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2"></a>

```typescript
public readonly oauth2: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a>

---

##### `oauth2Input`<sup>Optional</sup> <a name="oauth2Input" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input"></a>

```typescript
public readonly oauth2Input: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `workforcePoolsInput`<sup>Optional</sup> <a name="workforcePoolsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput"></a>

```typescript
public readonly workforcePoolsInput: string[];
```

- *Type:* string[]

---

##### `workforcePools`<sup>Required</sup> <a name="workforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools"></a>

```typescript
public readonly workforcePools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsAccessSettingsWorkforceIdentitySettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---


### GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri">resetAccessDeniedPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri">resetGenerateTroubleshootingUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled">resetRemediationTokenGenerationEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessDeniedPageUri` <a name="resetAccessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri"></a>

```typescript
public resetAccessDeniedPageUri(): void
```

##### `resetGenerateTroubleshootingUri` <a name="resetGenerateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri"></a>

```typescript
public resetGenerateTroubleshootingUri(): void
```

##### `resetRemediationTokenGenerationEnabled` <a name="resetRemediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled"></a>

```typescript
public resetRemediationTokenGenerationEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput">accessDeniedPageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput">generateTroubleshootingUriInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput">remediationTokenGenerationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri">accessDeniedPageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri">generateTroubleshootingUri</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled">remediationTokenGenerationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessDeniedPageUriInput`<sup>Optional</sup> <a name="accessDeniedPageUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput"></a>

```typescript
public readonly accessDeniedPageUriInput: string;
```

- *Type:* string

---

##### `generateTroubleshootingUriInput`<sup>Optional</sup> <a name="generateTroubleshootingUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput"></a>

```typescript
public readonly generateTroubleshootingUriInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remediationTokenGenerationEnabledInput`<sup>Optional</sup> <a name="remediationTokenGenerationEnabledInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput"></a>

```typescript
public readonly remediationTokenGenerationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accessDeniedPageUri`<sup>Required</sup> <a name="accessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri"></a>

```typescript
public readonly accessDeniedPageUri: string;
```

- *Type:* string

---

##### `generateTroubleshootingUri`<sup>Required</sup> <a name="generateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri"></a>

```typescript
public readonly generateTroubleshootingUri: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remediationTokenGenerationEnabled`<sup>Required</sup> <a name="remediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled"></a>

```typescript
public readonly remediationTokenGenerationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---


### GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials">resetOutputCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetOutputCredentials` <a name="resetOutputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials"></a>

```typescript
public resetOutputCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput">outputCredentialsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials">outputCredentials</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `outputCredentialsInput`<sup>Optional</sup> <a name="outputCredentialsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput"></a>

```typescript
public readonly outputCredentialsInput: string[];
```

- *Type:* string[]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `outputCredentials`<sup>Required</sup> <a name="outputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials"></a>

```typescript
public readonly outputCredentials: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsApplicationSettingsAttributePropagationSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---


### GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud">resetRctokenAud</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRctokenAud` <a name="resetRctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud"></a>

```typescript
public resetRctokenAud(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput">rctokenAudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud">rctokenAud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rctokenAudInput`<sup>Optional</sup> <a name="rctokenAudInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput"></a>

```typescript
public readonly rctokenAudInput: string;
```

- *Type:* string

---

##### `rctokenAud`<sup>Required</sup> <a name="rctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud"></a>

```typescript
public readonly rctokenAud: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsApplicationSettingsCsmSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---


### GoogleIapSettingsApplicationSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings">putAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings">putAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings">putCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings">resetAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings">resetAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCookieDomain">resetCookieDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCsmSettings">resetCsmSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessDeniedPageSettings` <a name="putAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings"></a>

```typescript
public putAccessDeniedPageSettings(value: GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `putAttributePropagationSettings` <a name="putAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings"></a>

```typescript
public putAttributePropagationSettings(value: GoogleIapSettingsApplicationSettingsAttributePropagationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `putCsmSettings` <a name="putCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings"></a>

```typescript
public putCsmSettings(value: GoogleIapSettingsApplicationSettingsCsmSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---

##### `resetAccessDeniedPageSettings` <a name="resetAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings"></a>

```typescript
public resetAccessDeniedPageSettings(): void
```

##### `resetAttributePropagationSettings` <a name="resetAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings"></a>

```typescript
public resetAttributePropagationSettings(): void
```

##### `resetCookieDomain` <a name="resetCookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCookieDomain"></a>

```typescript
public resetCookieDomain(): void
```

##### `resetCsmSettings` <a name="resetCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCsmSettings"></a>

```typescript
public resetCsmSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings">accessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings">attributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettings">csmSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference">GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput">accessDeniedPageSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput">attributePropagationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomainInput">cookieDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettingsInput">csmSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomain">cookieDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessDeniedPageSettings`<sup>Required</sup> <a name="accessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings"></a>

```typescript
public readonly accessDeniedPageSettings: GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a>

---

##### `attributePropagationSettings`<sup>Required</sup> <a name="attributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings"></a>

```typescript
public readonly attributePropagationSettings: GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a>

---

##### `csmSettings`<sup>Required</sup> <a name="csmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettings"></a>

```typescript
public readonly csmSettings: GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference">GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference</a>

---

##### `accessDeniedPageSettingsInput`<sup>Optional</sup> <a name="accessDeniedPageSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput"></a>

```typescript
public readonly accessDeniedPageSettingsInput: GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `attributePropagationSettingsInput`<sup>Optional</sup> <a name="attributePropagationSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput"></a>

```typescript
public readonly attributePropagationSettingsInput: GoogleIapSettingsApplicationSettingsAttributePropagationSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `cookieDomainInput`<sup>Optional</sup> <a name="cookieDomainInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomainInput"></a>

```typescript
public readonly cookieDomainInput: string;
```

- *Type:* string

---

##### `csmSettingsInput`<sup>Optional</sup> <a name="csmSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettingsInput"></a>

```typescript
public readonly csmSettingsInput: GoogleIapSettingsApplicationSettingsCsmSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---

##### `cookieDomain`<sup>Required</sup> <a name="cookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomain"></a>

```typescript
public readonly cookieDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIapSettingsApplicationSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---


### GoogleIapSettingsTimeoutsOutputReference <a name="GoogleIapSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIapSettings } from '@cdktf/provider-google-beta'

new googleIapSettings.GoogleIapSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIapSettingsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

---



