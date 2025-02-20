# `googleFirebaseAndroidApp` Submodule <a name="`googleFirebaseAndroidApp` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAndroidApp <a name="GoogleFirebaseAndroidApp" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app google_firebase_android_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer"></a>

```typescript
import { googleFirebaseAndroidApp } from '@cdktf/provider-google-beta'

new googleFirebaseAndroidApp.GoogleFirebaseAndroidApp(scope: Construct, id: string, config: GoogleFirebaseAndroidAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig">GoogleFirebaseAndroidAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig">GoogleFirebaseAndroidAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetApiKeyId">resetApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetSha1Hashes">resetSha1Hashes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetSha256Hashes">resetSha256Hashes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseAndroidAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts">GoogleFirebaseAndroidAppTimeouts</a>

---

##### `resetApiKeyId` <a name="resetApiKeyId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetApiKeyId"></a>

```typescript
public resetApiKeyId(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSha1Hashes` <a name="resetSha1Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetSha1Hashes"></a>

```typescript
public resetSha1Hashes(): void
```

##### `resetSha256Hashes` <a name="resetSha256Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetSha256Hashes"></a>

```typescript
public resetSha256Hashes(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAndroidApp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isConstruct"></a>

```typescript
import { googleFirebaseAndroidApp } from '@cdktf/provider-google-beta'

googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformElement"></a>

```typescript
import { googleFirebaseAndroidApp } from '@cdktf/provider-google-beta'

googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformResource"></a>

```typescript
import { googleFirebaseAndroidApp } from '@cdktf/provider-google-beta'

googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport"></a>

```typescript
import { googleFirebaseAndroidApp } from '@cdktf/provider-google-beta'

googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleFirebaseAndroidApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAndroidApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAndroidApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAndroidApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference">GoogleFirebaseAndroidAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.apiKeyIdInput">apiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.packageNameInput">packageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha1HashesInput">sha1HashesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha256HashesInput">sha256HashesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts">GoogleFirebaseAndroidAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha1Hashes">sha1Hashes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha256Hashes">sha256Hashes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAndroidAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference">GoogleFirebaseAndroidAppTimeoutsOutputReference</a>

---

##### `apiKeyIdInput`<sup>Optional</sup> <a name="apiKeyIdInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.apiKeyIdInput"></a>

```typescript
public readonly apiKeyIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.packageNameInput"></a>

```typescript
public readonly packageNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sha1HashesInput`<sup>Optional</sup> <a name="sha1HashesInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha1HashesInput"></a>

```typescript
public readonly sha1HashesInput: string[];
```

- *Type:* string[]

---

##### `sha256HashesInput`<sup>Optional</sup> <a name="sha256HashesInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha256HashesInput"></a>

```typescript
public readonly sha256HashesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseAndroidAppTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts">GoogleFirebaseAndroidAppTimeouts</a>

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `sha1Hashes`<sup>Required</sup> <a name="sha1Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha1Hashes"></a>

```typescript
public readonly sha1Hashes: string[];
```

- *Type:* string[]

---

##### `sha256Hashes`<sup>Required</sup> <a name="sha256Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha256Hashes"></a>

```typescript
public readonly sha256Hashes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAndroidAppConfig <a name="GoogleFirebaseAndroidAppConfig" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.Initializer"></a>

```typescript
import { googleFirebaseAndroidApp } from '@cdktf/provider-google-beta'

const googleFirebaseAndroidAppConfig: googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-assigned display name of the AndroidApp. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.packageName">packageName</a></code> | <code>string</code> | The canonical package name of the Android app as would appear in the Google Play Developer Console. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | (Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state rather than deleted upon 'terraform destroy'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#id GoogleFirebaseAndroidApp#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#project GoogleFirebaseAndroidApp#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.sha1Hashes">sha1Hashes</a></code> | <code>string[]</code> | The SHA1 certificate hashes for the AndroidApp. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.sha256Hashes">sha256Hashes</a></code> | <code>string[]</code> | The SHA256 certificate hashes for the AndroidApp. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts">GoogleFirebaseAndroidAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-assigned display name of the AndroidApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#display_name GoogleFirebaseAndroidApp#display_name}

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The canonical package name of the Android app as would appear in the Google Play Developer Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#package_name GoogleFirebaseAndroidApp#package_name}

---

##### `apiKeyId`<sup>Optional</sup> <a name="apiKeyId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp.

If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AndroidApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#api_key_id GoogleFirebaseAndroidApp#api_key_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

(Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state rather than deleted upon 'terraform destroy'.

This is useful because the AndroidApp may be
serving traffic. Set to 'DELETE' to delete the AndroidApp. Defaults to 'DELETE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#deletion_policy GoogleFirebaseAndroidApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#id GoogleFirebaseAndroidApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#project GoogleFirebaseAndroidApp#project}.

---

##### `sha1Hashes`<sup>Optional</sup> <a name="sha1Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.sha1Hashes"></a>

```typescript
public readonly sha1Hashes: string[];
```

- *Type:* string[]

The SHA1 certificate hashes for the AndroidApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#sha1_hashes GoogleFirebaseAndroidApp#sha1_hashes}

---

##### `sha256Hashes`<sup>Optional</sup> <a name="sha256Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.sha256Hashes"></a>

```typescript
public readonly sha256Hashes: string[];
```

- *Type:* string[]

The SHA256 certificate hashes for the AndroidApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#sha256_hashes GoogleFirebaseAndroidApp#sha256_hashes}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAndroidAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts">GoogleFirebaseAndroidAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#timeouts GoogleFirebaseAndroidApp#timeouts}

---

### GoogleFirebaseAndroidAppTimeouts <a name="GoogleFirebaseAndroidAppTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.Initializer"></a>

```typescript
import { googleFirebaseAndroidApp } from '@cdktf/provider-google-beta'

const googleFirebaseAndroidAppTimeouts: googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#create GoogleFirebaseAndroidApp#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#delete GoogleFirebaseAndroidApp#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#update GoogleFirebaseAndroidApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#create GoogleFirebaseAndroidApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#delete GoogleFirebaseAndroidApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_android_app#update GoogleFirebaseAndroidApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAndroidAppTimeoutsOutputReference <a name="GoogleFirebaseAndroidAppTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAndroidApp } from '@cdktf/provider-google-beta'

new googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts">GoogleFirebaseAndroidAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseAndroidAppTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts">GoogleFirebaseAndroidAppTimeouts</a>

---



