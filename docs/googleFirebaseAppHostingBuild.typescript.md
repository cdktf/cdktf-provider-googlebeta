# `googleFirebaseAppHostingBuild` Submodule <a name="`googleFirebaseAppHostingBuild` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppHostingBuild <a name="GoogleFirebaseAppHostingBuild" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build google_firebase_app_hosting_build}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild(scope: Construct, id: string, config: GoogleFirebaseAppHostingBuildConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig">GoogleFirebaseAppHostingBuildConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig">GoogleFirebaseAppHostingBuildConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putSource"></a>

```typescript
public putSource(value: GoogleFirebaseAppHostingBuildSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseAppHostingBuildTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts">GoogleFirebaseAppHostingBuildTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppHostingBuild resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isConstruct"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformElement"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformResource"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleFirebaseAppHostingBuild resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAppHostingBuild to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAppHostingBuild that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppHostingBuild to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildLogsUri">buildLogsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList">GoogleFirebaseAppHostingBuildErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.errorSource">errorSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference">GoogleFirebaseAppHostingBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference">GoogleFirebaseAppHostingBuildTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildIdInput">buildIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts">GoogleFirebaseAppHostingBuildTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildId">buildId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildLogsUri`<sup>Required</sup> <a name="buildLogsUri" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildLogsUri"></a>

```typescript
public readonly buildLogsUri: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.error"></a>

```typescript
public readonly error: GoogleFirebaseAppHostingBuildErrorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList">GoogleFirebaseAppHostingBuildErrorList</a>

---

##### `errorSource`<sup>Required</sup> <a name="errorSource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.errorSource"></a>

```typescript
public readonly errorSource: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.source"></a>

```typescript
public readonly source: GoogleFirebaseAppHostingBuildSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference">GoogleFirebaseAppHostingBuildSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAppHostingBuildTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference">GoogleFirebaseAppHostingBuildTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `buildIdInput`<sup>Optional</sup> <a name="buildIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildIdInput"></a>

```typescript
public readonly buildIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.sourceInput"></a>

```typescript
public readonly sourceInput: GoogleFirebaseAppHostingBuildSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseAppHostingBuildTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts">GoogleFirebaseAppHostingBuildTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppHostingBuildConfig <a name="GoogleFirebaseAppHostingBuildConfig" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingBuildConfig: googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.backend">backend</a></code> | <code>string</code> | The ID of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.buildId">buildId</a></code> | <code>string</code> | The user-specified ID of the build being created. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.location">location</a></code> | <code>string</code> | The location of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#id GoogleFirebaseAppHostingBuild#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#project GoogleFirebaseAppHostingBuild#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts">GoogleFirebaseAppHostingBuildTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The ID of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#backend GoogleFirebaseAppHostingBuild#backend}

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

The user-specified ID of the build being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#build_id GoogleFirebaseAppHostingBuild#build_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#location GoogleFirebaseAppHostingBuild#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.source"></a>

```typescript
public readonly source: GoogleFirebaseAppHostingBuildSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#source GoogleFirebaseAppHostingBuild#source}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#annotations GoogleFirebaseAppHostingBuild#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#display_name GoogleFirebaseAppHostingBuild#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#id GoogleFirebaseAppHostingBuild#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#labels GoogleFirebaseAppHostingBuild#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#project GoogleFirebaseAppHostingBuild#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAppHostingBuildTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts">GoogleFirebaseAppHostingBuildTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#timeouts GoogleFirebaseAppHostingBuild#timeouts}

---

### GoogleFirebaseAppHostingBuildError <a name="GoogleFirebaseAppHostingBuildError" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildError.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingBuildError: googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildError = { ... }
```


### GoogleFirebaseAppHostingBuildSource <a name="GoogleFirebaseAppHostingBuildSource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingBuildSource: googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource.property.codebase">codebase</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a></code> | codebase block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource.property.container">container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a></code> | container block. |

---

##### `codebase`<sup>Optional</sup> <a name="codebase" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource.property.codebase"></a>

```typescript
public readonly codebase: GoogleFirebaseAppHostingBuildSourceCodebase;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#codebase GoogleFirebaseAppHostingBuild#codebase}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource.property.container"></a>

```typescript
public readonly container: GoogleFirebaseAppHostingBuildSourceContainer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#container GoogleFirebaseAppHostingBuild#container}

---

### GoogleFirebaseAppHostingBuildSourceCodebase <a name="GoogleFirebaseAppHostingBuildSourceCodebase" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingBuildSourceCodebase: googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase.property.branch">branch</a></code> | <code>string</code> | The branch in the codebase to build from, using the latest commit. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase.property.commit">commit</a></code> | <code>string</code> | The commit in the codebase to build from. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The branch in the codebase to build from, using the latest commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#branch GoogleFirebaseAppHostingBuild#branch}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

The commit in the codebase to build from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#commit GoogleFirebaseAppHostingBuild#commit}

---

### GoogleFirebaseAppHostingBuildSourceCodebaseAuthor <a name="GoogleFirebaseAppHostingBuildSourceCodebaseAuthor" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthor.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingBuildSourceCodebaseAuthor: googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthor = { ... }
```


### GoogleFirebaseAppHostingBuildSourceContainer <a name="GoogleFirebaseAppHostingBuildSourceContainer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingBuildSourceContainer: googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer.property.image">image</a></code> | <code>string</code> | A URI representing a container for the backend to use. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

A URI representing a container for the backend to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#image GoogleFirebaseAppHostingBuild#image}

---

### GoogleFirebaseAppHostingBuildTimeouts <a name="GoogleFirebaseAppHostingBuildTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

const googleFirebaseAppHostingBuildTimeouts: googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#create GoogleFirebaseAppHostingBuild#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#delete GoogleFirebaseAppHostingBuild#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#update GoogleFirebaseAppHostingBuild#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#create GoogleFirebaseAppHostingBuild#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#delete GoogleFirebaseAppHostingBuild#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firebase_app_hosting_build#update GoogleFirebaseAppHostingBuild#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppHostingBuildErrorList <a name="GoogleFirebaseAppHostingBuildErrorList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingBuildErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingBuildErrorOutputReference <a name="GoogleFirebaseAppHostingBuildErrorOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildError">GoogleFirebaseAppHostingBuildError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingBuildError;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildError">GoogleFirebaseAppHostingBuildError</a>

---


### GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList <a name="GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.get"></a>

```typescript
public get(index: number): GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference <a name="GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthor">GoogleFirebaseAppHostingBuildSourceCodebaseAuthor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingBuildSourceCodebaseAuthor;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthor">GoogleFirebaseAppHostingBuildSourceCodebaseAuthor</a>

---


### GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference <a name="GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit">resetCommit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCommit` <a name="resetCommit" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.author">author</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList">GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage">commitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime">commitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash">hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.author"></a>

```typescript
public readonly author: GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList">GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList</a>

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

---

##### `commitTime`<sup>Required</sup> <a name="commitTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime"></a>

```typescript
public readonly commitTime: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash"></a>

```typescript
public readonly hash: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingBuildSourceCodebase;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a>

---


### GoogleFirebaseAppHostingBuildSourceContainerOutputReference <a name="GoogleFirebaseAppHostingBuildSourceContainerOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingBuildSourceContainer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a>

---


### GoogleFirebaseAppHostingBuildSourceOutputReference <a name="GoogleFirebaseAppHostingBuildSourceOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putCodebase">putCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resetCodebase">resetCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resetContainer">resetContainer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodebase` <a name="putCodebase" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putCodebase"></a>

```typescript
public putCodebase(value: GoogleFirebaseAppHostingBuildSourceCodebase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putCodebase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a>

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putContainer"></a>

```typescript
public putContainer(value: GoogleFirebaseAppHostingBuildSourceContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a>

---

##### `resetCodebase` <a name="resetCodebase" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resetCodebase"></a>

```typescript
public resetCodebase(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.codebase">codebase</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference">GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference">GoogleFirebaseAppHostingBuildSourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.codebaseInput">codebaseInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.containerInput">containerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codebase`<sup>Required</sup> <a name="codebase" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.codebase"></a>

```typescript
public readonly codebase: GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference">GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.container"></a>

```typescript
public readonly container: GoogleFirebaseAppHostingBuildSourceContainerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference">GoogleFirebaseAppHostingBuildSourceContainerOutputReference</a>

---

##### `codebaseInput`<sup>Optional</sup> <a name="codebaseInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.codebaseInput"></a>

```typescript
public readonly codebaseInput: GoogleFirebaseAppHostingBuildSourceCodebase;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: GoogleFirebaseAppHostingBuildSourceContainer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAppHostingBuildSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a>

---


### GoogleFirebaseAppHostingBuildTimeoutsOutputReference <a name="GoogleFirebaseAppHostingBuildTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppHostingBuild } from '@cdktf/provider-google-beta'

new googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts">GoogleFirebaseAppHostingBuildTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseAppHostingBuildTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts">GoogleFirebaseAppHostingBuildTimeouts</a>

---



