# `googleDataprocMetastoreDatabaseIamPolicy` Submodule <a name="`googleDataprocMetastoreDatabaseIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreDatabaseIamPolicy <a name="GoogleDataprocMetastoreDatabaseIamPolicy" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy google_dataproc_metastore_database_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.Initializer"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamPolicy } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy(scope: Construct, id: string, config: GoogleDataprocMetastoreDatabaseIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig">GoogleDataprocMetastoreDatabaseIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig">GoogleDataprocMetastoreDatabaseIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocMetastoreDatabaseIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isConstruct"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamPolicy } from '@cdktf/provider-google-beta'

googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isTerraformElement"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamPolicy } from '@cdktf/provider-google-beta'

googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isTerraformResource"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamPolicy } from '@cdktf/provider-google-beta'

googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamPolicy } from '@cdktf/provider-google-beta'

googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataprocMetastoreDatabaseIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocMetastoreDatabaseIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocMetastoreDatabaseIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocMetastoreDatabaseIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreDatabaseIamPolicyConfig <a name="GoogleDataprocMetastoreDatabaseIamPolicyConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamPolicy } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreDatabaseIamPolicyConfig: googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#database GoogleDataprocMetastoreDatabaseIamPolicy#database}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#policy_data GoogleDataprocMetastoreDatabaseIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#service_id GoogleDataprocMetastoreDatabaseIamPolicy#service_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#id GoogleDataprocMetastoreDatabaseIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#location GoogleDataprocMetastoreDatabaseIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#project GoogleDataprocMetastoreDatabaseIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#database GoogleDataprocMetastoreDatabaseIamPolicy#database}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#policy_data GoogleDataprocMetastoreDatabaseIamPolicy#policy_data}.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#service_id GoogleDataprocMetastoreDatabaseIamPolicy#service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#id GoogleDataprocMetastoreDatabaseIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#location GoogleDataprocMetastoreDatabaseIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamPolicy.GoogleDataprocMetastoreDatabaseIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_dataproc_metastore_database_iam_policy#project GoogleDataprocMetastoreDatabaseIamPolicy#project}.

---



