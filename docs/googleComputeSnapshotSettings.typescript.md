# `googleComputeSnapshotSettings` Submodule <a name="`googleComputeSnapshotSettings` Submodule" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSnapshotSettings <a name="GoogleComputeSnapshotSettings" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings google_compute_snapshot_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

new googleComputeSnapshotSettings.GoogleComputeSnapshotSettings(scope: Construct, id: string, config: GoogleComputeSnapshotSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig">GoogleComputeSnapshotSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig">GoogleComputeSnapshotSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putStorageLocation">putStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStorageLocation` <a name="putStorageLocation" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putStorageLocation"></a>

```typescript
public putStorageLocation(value: GoogleComputeSnapshotSettingsStorageLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeSnapshotSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeSnapshotSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isConstruct"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformElement"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformResource"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeSnapshotSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeSnapshotSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeSnapshotSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeSnapshotSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference">GoogleComputeSnapshotSettingsStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference">GoogleComputeSnapshotSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.storageLocationInput">storageLocationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.storageLocation"></a>

```typescript
public readonly storageLocation: GoogleComputeSnapshotSettingsStorageLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference">GoogleComputeSnapshotSettingsStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeSnapshotSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference">GoogleComputeSnapshotSettingsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: GoogleComputeSnapshotSettingsStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeSnapshotSettingsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSnapshotSettingsConfig <a name="GoogleComputeSnapshotSettingsConfig" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.Initializer"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

const googleComputeSnapshotSettingsConfig: googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#id GoogleComputeSnapshotSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#project GoogleComputeSnapshotSettings#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.storageLocation"></a>

```typescript
public readonly storageLocation: GoogleComputeSnapshotSettingsStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#storage_location GoogleComputeSnapshotSettings#storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#id GoogleComputeSnapshotSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#project GoogleComputeSnapshotSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeSnapshotSettingsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#timeouts GoogleComputeSnapshotSettings#timeouts}

---

### GoogleComputeSnapshotSettingsStorageLocation <a name="GoogleComputeSnapshotSettingsStorageLocation" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation.Initializer"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

const googleComputeSnapshotSettingsStorageLocation: googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation.property.policy">policy</a></code> | <code>string</code> | The chosen location policy Possible values: ["NEAREST_MULTI_REGION", "LOCAL_REGION", "SPECIFIC_LOCATIONS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation.property.locations">locations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>[]</code> | locations block. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

The chosen location policy Possible values: ["NEAREST_MULTI_REGION", "LOCAL_REGION", "SPECIFIC_LOCATIONS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#policy GoogleComputeSnapshotSettings#policy}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation.property.locations"></a>

```typescript
public readonly locations: IResolvable | GoogleComputeSnapshotSettingsStorageLocationLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>[]

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#locations GoogleComputeSnapshotSettings#locations}

---

### GoogleComputeSnapshotSettingsStorageLocationLocations <a name="GoogleComputeSnapshotSettingsStorageLocationLocations" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations.Initializer"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

const googleComputeSnapshotSettingsStorageLocationLocations: googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#location GoogleComputeSnapshotSettings#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations.property.name">name</a></code> | <code>string</code> | Name of the location. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#location GoogleComputeSnapshotSettings#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the location.

It should be one of the Cloud Storage buckets.
Only one location can be specified. (should match location)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#name GoogleComputeSnapshotSettings#name}

---

### GoogleComputeSnapshotSettingsTimeouts <a name="GoogleComputeSnapshotSettingsTimeouts" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.Initializer"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

const googleComputeSnapshotSettingsTimeouts: googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#create GoogleComputeSnapshotSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#delete GoogleComputeSnapshotSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#update GoogleComputeSnapshotSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#create GoogleComputeSnapshotSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#delete GoogleComputeSnapshotSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_snapshot_settings#update GoogleComputeSnapshotSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSnapshotSettingsStorageLocationLocationsList <a name="GoogleComputeSnapshotSettingsStorageLocationLocationsList" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

new googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.get"></a>

```typescript
public get(index: number): GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeSnapshotSettingsStorageLocationLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>[]

---


### GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference <a name="GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

new googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeSnapshotSettingsStorageLocationLocations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>

---


### GoogleComputeSnapshotSettingsStorageLocationOutputReference <a name="GoogleComputeSnapshotSettingsStorageLocationOutputReference" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

new googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.putLocations">putLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.resetLocations">resetLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocations` <a name="putLocations" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.putLocations"></a>

```typescript
public putLocations(value: IResolvable | GoogleComputeSnapshotSettingsStorageLocationLocations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.putLocations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>[]

---

##### `resetLocations` <a name="resetLocations" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.resetLocations"></a>

```typescript
public resetLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList">GoogleComputeSnapshotSettingsStorageLocationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.locationsInput">locationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.locations"></a>

```typescript
public readonly locations: GoogleComputeSnapshotSettingsStorageLocationLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocationsList">GoogleComputeSnapshotSettingsStorageLocationLocationsList</a>

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: IResolvable | GoogleComputeSnapshotSettingsStorageLocationLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationLocations">GoogleComputeSnapshotSettingsStorageLocationLocations</a>[]

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeSnapshotSettingsStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsStorageLocation">GoogleComputeSnapshotSettingsStorageLocation</a>

---


### GoogleComputeSnapshotSettingsTimeoutsOutputReference <a name="GoogleComputeSnapshotSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeSnapshotSettings } from '@cdktf/provider-google-beta'

new googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeSnapshotSettingsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeSnapshotSettings.GoogleComputeSnapshotSettingsTimeouts">GoogleComputeSnapshotSettingsTimeouts</a>

---



