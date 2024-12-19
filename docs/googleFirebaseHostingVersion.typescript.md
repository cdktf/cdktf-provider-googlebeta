# `googleFirebaseHostingVersion` Submodule <a name="`googleFirebaseHostingVersion` Submodule" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseHostingVersion <a name="GoogleFirebaseHostingVersion" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version google_firebase_hosting_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

new googleFirebaseHostingVersion.GoogleFirebaseHostingVersion(scope: Construct, id: string, config: GoogleFirebaseHostingVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig">GoogleFirebaseHostingVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig">GoogleFirebaseHostingVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig"></a>

```typescript
public putConfig(value: GoogleFirebaseHostingVersionConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseHostingVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseHostingVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleFirebaseHostingVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseHostingVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseHostingVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseHostingVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference">GoogleFirebaseHostingVersionConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference">GoogleFirebaseHostingVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.config"></a>

```typescript
public readonly config: GoogleFirebaseHostingVersionConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference">GoogleFirebaseHostingVersionConfigAOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseHostingVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference">GoogleFirebaseHostingVersionTimeoutsOutputReference</a>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.configInput"></a>

```typescript
public readonly configInput: GoogleFirebaseHostingVersionConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseHostingVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseHostingVersionConfig <a name="GoogleFirebaseHostingVersionConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

const googleFirebaseHostingVersionConfig: googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.siteId">siteId</a></code> | <code>string</code> | Required. The ID of the site in which to create this Version. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Required. The ID of the site in which to create this Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#site_id GoogleFirebaseHostingVersion#site_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.config"></a>

```typescript
public readonly config: GoogleFirebaseHostingVersionConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#config GoogleFirebaseHostingVersion#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseHostingVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#timeouts GoogleFirebaseHostingVersion#timeouts}

---

### GoogleFirebaseHostingVersionConfigA <a name="GoogleFirebaseHostingVersionConfigA" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

const googleFirebaseHostingVersionConfigA: googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.redirects">redirects</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>[]</code> | redirects block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.rewrites">rewrites</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>[]</code> | rewrites block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.headers"></a>

```typescript
public readonly headers: IResolvable | GoogleFirebaseHostingVersionConfigHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#headers GoogleFirebaseHostingVersion#headers}

---

##### `redirects`<sup>Optional</sup> <a name="redirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.redirects"></a>

```typescript
public readonly redirects: IResolvable | GoogleFirebaseHostingVersionConfigRedirects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>[]

redirects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#redirects GoogleFirebaseHostingVersion#redirects}

---

##### `rewrites`<sup>Optional</sup> <a name="rewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.rewrites"></a>

```typescript
public readonly rewrites: IResolvable | GoogleFirebaseHostingVersionConfigRewrites[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>[]

rewrites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#rewrites GoogleFirebaseHostingVersion#rewrites}

---

### GoogleFirebaseHostingVersionConfigHeaders <a name="GoogleFirebaseHostingVersionConfigHeaders" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

const googleFirebaseHostingVersionConfigHeaders: googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | The additional headers to add to the response. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.glob">glob</a></code> | <code>string</code> | The user-supplied glob to match against the request URL path. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.regex">regex</a></code> | <code>string</code> | The user-supplied RE2 regular expression to match against the request URL path. |

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The additional headers to add to the response. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#headers GoogleFirebaseHostingVersion#headers}

---

##### `glob`<sup>Optional</sup> <a name="glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.glob"></a>

```typescript
public readonly glob: string;
```

- *Type:* string

The user-supplied glob to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

The user-supplied RE2 regular expression to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}

---

### GoogleFirebaseHostingVersionConfigRedirects <a name="GoogleFirebaseHostingVersionConfigRedirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

const googleFirebaseHostingVersionConfigRedirects: googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.location">location</a></code> | <code>string</code> | The value to put in the HTTP location header of the response. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.statusCode">statusCode</a></code> | <code>number</code> | The status HTTP code to return in the response. It must be a valid 3xx status code. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.glob">glob</a></code> | <code>string</code> | The user-supplied glob to match against the request URL path. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.regex">regex</a></code> | <code>string</code> | The user-supplied RE2 regular expression to match against the request URL path. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The value to put in the HTTP location header of the response.

The location can contain capture group values from the pattern using a : prefix to identify
the segment and an optional * to capture the rest of the URL. For example:

```hcl
redirects {
  glob = "/:capture*"
  status_code = 302
  location = "https://example.com/foo/:capture"
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#location GoogleFirebaseHostingVersion#location}

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

The status HTTP code to return in the response. It must be a valid 3xx status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#status_code GoogleFirebaseHostingVersion#status_code}

---

##### `glob`<sup>Optional</sup> <a name="glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.glob"></a>

```typescript
public readonly glob: string;
```

- *Type:* string

The user-supplied glob to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

The user-supplied RE2 regular expression to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}

---

### GoogleFirebaseHostingVersionConfigRewrites <a name="GoogleFirebaseHostingVersionConfigRewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

const googleFirebaseHostingVersionConfigRewrites: googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.function">function</a></code> | <code>string</code> | The function to proxy requests to. Must match the exported function name exactly. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.glob">glob</a></code> | <code>string</code> | The user-supplied glob to match against the request URL path. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.path">path</a></code> | <code>string</code> | The URL path to rewrite the request to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.regex">regex</a></code> | <code>string</code> | The user-supplied RE2 regular expression to match against the request URL path. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.run">run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | run block. |

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

The function to proxy requests to. Must match the exported function name exactly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#function GoogleFirebaseHostingVersion#function}

---

##### `glob`<sup>Optional</sup> <a name="glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.glob"></a>

```typescript
public readonly glob: string;
```

- *Type:* string

The user-supplied glob to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The URL path to rewrite the request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#path GoogleFirebaseHostingVersion#path}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

The user-supplied RE2 regular expression to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.run"></a>

```typescript
public readonly run: GoogleFirebaseHostingVersionConfigRewritesRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#run GoogleFirebaseHostingVersion#run}

---

### GoogleFirebaseHostingVersionConfigRewritesRun <a name="GoogleFirebaseHostingVersionConfigRewritesRun" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

const googleFirebaseHostingVersionConfigRewritesRun: googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.serviceId">serviceId</a></code> | <code>string</code> | User-defined ID of the Cloud Run service. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.region">region</a></code> | <code>string</code> | Optional. User-provided region where the Cloud Run service is hosted. Defaults to 'us-central1' if not supplied. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

User-defined ID of the Cloud Run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#service_id GoogleFirebaseHostingVersion#service_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Optional. User-provided region where the Cloud Run service is hosted. Defaults to 'us-central1' if not supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#region GoogleFirebaseHostingVersion#region}

---

### GoogleFirebaseHostingVersionTimeouts <a name="GoogleFirebaseHostingVersionTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

const googleFirebaseHostingVersionTimeouts: googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#create GoogleFirebaseHostingVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#delete GoogleFirebaseHostingVersion#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#create GoogleFirebaseHostingVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_hosting_version#delete GoogleFirebaseHostingVersion#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseHostingVersionConfigAOutputReference <a name="GoogleFirebaseHostingVersionConfigAOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

new googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects">putRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites">putRewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRedirects">resetRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRewrites">resetRewrites</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | GoogleFirebaseHostingVersionConfigHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>[]

---

##### `putRedirects` <a name="putRedirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects"></a>

```typescript
public putRedirects(value: IResolvable | GoogleFirebaseHostingVersionConfigRedirects[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>[]

---

##### `putRewrites` <a name="putRewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites"></a>

```typescript
public putRewrites(value: IResolvable | GoogleFirebaseHostingVersionConfigRewrites[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>[]

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetRedirects` <a name="resetRedirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRedirects"></a>

```typescript
public resetRedirects(): void
```

##### `resetRewrites` <a name="resetRewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRewrites"></a>

```typescript
public resetRewrites(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList">GoogleFirebaseHostingVersionConfigHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirects">redirects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList">GoogleFirebaseHostingVersionConfigRedirectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewrites">rewrites</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList">GoogleFirebaseHostingVersionConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirectsInput">redirectsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewritesInput">rewritesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.headers"></a>

```typescript
public readonly headers: GoogleFirebaseHostingVersionConfigHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList">GoogleFirebaseHostingVersionConfigHeadersList</a>

---

##### `redirects`<sup>Required</sup> <a name="redirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirects"></a>

```typescript
public readonly redirects: GoogleFirebaseHostingVersionConfigRedirectsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList">GoogleFirebaseHostingVersionConfigRedirectsList</a>

---

##### `rewrites`<sup>Required</sup> <a name="rewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewrites"></a>

```typescript
public readonly rewrites: GoogleFirebaseHostingVersionConfigRewritesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList">GoogleFirebaseHostingVersionConfigRewritesList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | GoogleFirebaseHostingVersionConfigHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>[]

---

##### `redirectsInput`<sup>Optional</sup> <a name="redirectsInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirectsInput"></a>

```typescript
public readonly redirectsInput: IResolvable | GoogleFirebaseHostingVersionConfigRedirects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>[]

---

##### `rewritesInput`<sup>Optional</sup> <a name="rewritesInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewritesInput"></a>

```typescript
public readonly rewritesInput: IResolvable | GoogleFirebaseHostingVersionConfigRewrites[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingVersionConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---


### GoogleFirebaseHostingVersionConfigHeadersList <a name="GoogleFirebaseHostingVersionConfigHeadersList" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

new googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingVersionConfigHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseHostingVersionConfigHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>[]

---


### GoogleFirebaseHostingVersionConfigHeadersOutputReference <a name="GoogleFirebaseHostingVersionConfigHeadersOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

new googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resetGlob">resetGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlob` <a name="resetGlob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resetGlob"></a>

```typescript
public resetGlob(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.globInput">globInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.glob">glob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `globInput`<sup>Optional</sup> <a name="globInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.globInput"></a>

```typescript
public readonly globInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `glob`<sup>Required</sup> <a name="glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.glob"></a>

```typescript
public readonly glob: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseHostingVersionConfigHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>

---


### GoogleFirebaseHostingVersionConfigRedirectsList <a name="GoogleFirebaseHostingVersionConfigRedirectsList" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

new googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingVersionConfigRedirectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseHostingVersionConfigRedirects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>[]

---


### GoogleFirebaseHostingVersionConfigRedirectsOutputReference <a name="GoogleFirebaseHostingVersionConfigRedirectsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

new googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetGlob">resetGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlob` <a name="resetGlob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetGlob"></a>

```typescript
public resetGlob(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.globInput">globInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.glob">glob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `globInput`<sup>Optional</sup> <a name="globInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.globInput"></a>

```typescript
public readonly globInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `glob`<sup>Required</sup> <a name="glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.glob"></a>

```typescript
public readonly glob: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseHostingVersionConfigRedirects;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>

---


### GoogleFirebaseHostingVersionConfigRewritesList <a name="GoogleFirebaseHostingVersionConfigRewritesList" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

new googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get"></a>

```typescript
public get(index: number): GoogleFirebaseHostingVersionConfigRewritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseHostingVersionConfigRewrites[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>[]

---


### GoogleFirebaseHostingVersionConfigRewritesOutputReference <a name="GoogleFirebaseHostingVersionConfigRewritesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

new googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun">putRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetGlob">resetGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRun">resetRun</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRun` <a name="putRun" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun"></a>

```typescript
public putRun(value: GoogleFirebaseHostingVersionConfigRewritesRun): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetFunction"></a>

```typescript
public resetFunction(): void
```

##### `resetGlob` <a name="resetGlob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetGlob"></a>

```typescript
public resetGlob(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetRun` <a name="resetRun" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRun"></a>

```typescript
public resetRun(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.run">run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference">GoogleFirebaseHostingVersionConfigRewritesRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.functionInput">functionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.globInput">globInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.runInput">runInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.glob">glob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.run"></a>

```typescript
public readonly run: GoogleFirebaseHostingVersionConfigRewritesRunOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference">GoogleFirebaseHostingVersionConfigRewritesRunOutputReference</a>

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: string;
```

- *Type:* string

---

##### `globInput`<sup>Optional</sup> <a name="globInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.globInput"></a>

```typescript
public readonly globInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `runInput`<sup>Optional</sup> <a name="runInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.runInput"></a>

```typescript
public readonly runInput: GoogleFirebaseHostingVersionConfigRewritesRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `glob`<sup>Required</sup> <a name="glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.glob"></a>

```typescript
public readonly glob: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseHostingVersionConfigRewrites;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>

---


### GoogleFirebaseHostingVersionConfigRewritesRunOutputReference <a name="GoogleFirebaseHostingVersionConfigRewritesRunOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

new googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseHostingVersionConfigRewritesRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---


### GoogleFirebaseHostingVersionTimeoutsOutputReference <a name="GoogleFirebaseHostingVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseHostingVersion } from '@cdktf/provider-google-beta'

new googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseHostingVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

---



