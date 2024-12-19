# `googleKmsKeyRingImportJob` Submodule <a name="`googleKmsKeyRingImportJob` Submodule" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsKeyRingImportJob <a name="GoogleKmsKeyRingImportJob" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job google_kms_key_ring_import_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

new googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob(scope: Construct, id: string, config: GoogleKmsKeyRingImportJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig">GoogleKmsKeyRingImportJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig">GoogleKmsKeyRingImportJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleKmsKeyRingImportJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleKmsKeyRingImportJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isConstruct"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformElement"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformResource"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleKmsKeyRingImportJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleKmsKeyRingImportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleKmsKeyRingImportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsKeyRingImportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList">GoogleKmsKeyRingImportJobAttestationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList">GoogleKmsKeyRingImportJobPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference">GoogleKmsKeyRingImportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importJobIdInput">importJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importMethodInput">importMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.keyRingInput">keyRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.protectionLevelInput">protectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importJobId">importJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importMethod">importMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.keyRing">keyRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.protectionLevel">protectionLevel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.attestation"></a>

```typescript
public readonly attestation: GoogleKmsKeyRingImportJobAttestationList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList">GoogleKmsKeyRingImportJobAttestationList</a>

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.publicKey"></a>

```typescript
public readonly publicKey: GoogleKmsKeyRingImportJobPublicKeyList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList">GoogleKmsKeyRingImportJobPublicKeyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsKeyRingImportJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference">GoogleKmsKeyRingImportJobTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importJobIdInput`<sup>Optional</sup> <a name="importJobIdInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importJobIdInput"></a>

```typescript
public readonly importJobIdInput: string;
```

- *Type:* string

---

##### `importMethodInput`<sup>Optional</sup> <a name="importMethodInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importMethodInput"></a>

```typescript
public readonly importMethodInput: string;
```

- *Type:* string

---

##### `keyRingInput`<sup>Optional</sup> <a name="keyRingInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.keyRingInput"></a>

```typescript
public readonly keyRingInput: string;
```

- *Type:* string

---

##### `protectionLevelInput`<sup>Optional</sup> <a name="protectionLevelInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.protectionLevelInput"></a>

```typescript
public readonly protectionLevelInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleKmsKeyRingImportJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importJobId`<sup>Required</sup> <a name="importJobId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importJobId"></a>

```typescript
public readonly importJobId: string;
```

- *Type:* string

---

##### `importMethod`<sup>Required</sup> <a name="importMethod" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importMethod"></a>

```typescript
public readonly importMethod: string;
```

- *Type:* string

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.keyRing"></a>

```typescript
public readonly keyRing: string;
```

- *Type:* string

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.protectionLevel"></a>

```typescript
public readonly protectionLevel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsKeyRingImportJobAttestation <a name="GoogleKmsKeyRingImportJobAttestation" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestation.Initializer"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

const googleKmsKeyRingImportJobAttestation: googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestation = { ... }
```


### GoogleKmsKeyRingImportJobConfig <a name="GoogleKmsKeyRingImportJobConfig" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.Initializer"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

const googleKmsKeyRingImportJobConfig: googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.importJobId">importJobId</a></code> | <code>string</code> | It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.importMethod">importMethod</a></code> | <code>string</code> | The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"]. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.keyRing">keyRing</a></code> | <code>string</code> | The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.protectionLevel">protectionLevel</a></code> | <code>string</code> | The protection level of the ImportJob. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#id GoogleKmsKeyRingImportJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `importJobId`<sup>Required</sup> <a name="importJobId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.importJobId"></a>

```typescript
public readonly importJobId: string;
```

- *Type:* string

It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#import_job_id GoogleKmsKeyRingImportJob#import_job_id}

---

##### `importMethod`<sup>Required</sup> <a name="importMethod" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.importMethod"></a>

```typescript
public readonly importMethod: string;
```

- *Type:* string

The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#import_method GoogleKmsKeyRingImportJob#import_method}

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.keyRing"></a>

```typescript
public readonly keyRing: string;
```

- *Type:* string

The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#key_ring GoogleKmsKeyRingImportJob#key_ring}

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.protectionLevel"></a>

```typescript
public readonly protectionLevel: string;
```

- *Type:* string

The protection level of the ImportJob.

This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into. Possible values: ["SOFTWARE", "HSM", "EXTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#protection_level GoogleKmsKeyRingImportJob#protection_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#id GoogleKmsKeyRingImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsKeyRingImportJobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#timeouts GoogleKmsKeyRingImportJob#timeouts}

---

### GoogleKmsKeyRingImportJobPublicKey <a name="GoogleKmsKeyRingImportJobPublicKey" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKey.Initializer"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

const googleKmsKeyRingImportJobPublicKey: googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKey = { ... }
```


### GoogleKmsKeyRingImportJobTimeouts <a name="GoogleKmsKeyRingImportJobTimeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts.Initializer"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

const googleKmsKeyRingImportJobTimeouts: googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#create GoogleKmsKeyRingImportJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#delete GoogleKmsKeyRingImportJob#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#create GoogleKmsKeyRingImportJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_key_ring_import_job#delete GoogleKmsKeyRingImportJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsKeyRingImportJobAttestationList <a name="GoogleKmsKeyRingImportJobAttestationList" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

new googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.get"></a>

```typescript
public get(index: number): GoogleKmsKeyRingImportJobAttestationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleKmsKeyRingImportJobAttestationOutputReference <a name="GoogleKmsKeyRingImportJobAttestationOutputReference" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

new googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestation">GoogleKmsKeyRingImportJobAttestation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsKeyRingImportJobAttestation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestation">GoogleKmsKeyRingImportJobAttestation</a>

---


### GoogleKmsKeyRingImportJobPublicKeyList <a name="GoogleKmsKeyRingImportJobPublicKeyList" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

new googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.get"></a>

```typescript
public get(index: number): GoogleKmsKeyRingImportJobPublicKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleKmsKeyRingImportJobPublicKeyOutputReference <a name="GoogleKmsKeyRingImportJobPublicKeyOutputReference" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

new googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.pem">pem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKey">GoogleKmsKeyRingImportJobPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.pem"></a>

```typescript
public readonly pem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsKeyRingImportJobPublicKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKey">GoogleKmsKeyRingImportJobPublicKey</a>

---


### GoogleKmsKeyRingImportJobTimeoutsOutputReference <a name="GoogleKmsKeyRingImportJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleKmsKeyRingImportJob } from '@cdktf/provider-google-beta'

new googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleKmsKeyRingImportJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a>

---



