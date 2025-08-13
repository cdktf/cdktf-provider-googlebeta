# `googleDataprocMetastoreDatabaseIamMember` Submodule <a name="`googleDataprocMetastoreDatabaseIamMember` Submodule" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreDatabaseIamMember <a name="GoogleDataprocMetastoreDatabaseIamMember" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member google_dataproc_metastore_database_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamMember } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember(scope: Construct, id: string, config: GoogleDataprocMetastoreDatabaseIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig">GoogleDataprocMetastoreDatabaseIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig">GoogleDataprocMetastoreDatabaseIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleDataprocMetastoreDatabaseIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocMetastoreDatabaseIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isConstruct"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamMember } from '@cdktf/provider-google-beta'

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformElement"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamMember } from '@cdktf/provider-google-beta'

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformResource"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamMember } from '@cdktf/provider-google-beta'

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamMember } from '@cdktf/provider-google-beta'

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataprocMetastoreDatabaseIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocMetastoreDatabaseIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocMetastoreDatabaseIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocMetastoreDatabaseIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference">GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference">GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleDataprocMetastoreDatabaseIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreDatabaseIamMemberCondition <a name="GoogleDataprocMetastoreDatabaseIamMemberCondition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.Initializer"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamMember } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreDatabaseIamMemberCondition: googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#expression GoogleDataprocMetastoreDatabaseIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#title GoogleDataprocMetastoreDatabaseIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#description GoogleDataprocMetastoreDatabaseIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#expression GoogleDataprocMetastoreDatabaseIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#title GoogleDataprocMetastoreDatabaseIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#description GoogleDataprocMetastoreDatabaseIamMember#description}.

---

### GoogleDataprocMetastoreDatabaseIamMemberConfig <a name="GoogleDataprocMetastoreDatabaseIamMemberConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamMember } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreDatabaseIamMemberConfig: googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#database GoogleDataprocMetastoreDatabaseIamMember#database}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#member GoogleDataprocMetastoreDatabaseIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#role GoogleDataprocMetastoreDatabaseIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#service_id GoogleDataprocMetastoreDatabaseIamMember#service_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#id GoogleDataprocMetastoreDatabaseIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#location GoogleDataprocMetastoreDatabaseIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#project GoogleDataprocMetastoreDatabaseIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#database GoogleDataprocMetastoreDatabaseIamMember#database}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#member GoogleDataprocMetastoreDatabaseIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#role GoogleDataprocMetastoreDatabaseIamMember#role}.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#service_id GoogleDataprocMetastoreDatabaseIamMember#service_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleDataprocMetastoreDatabaseIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#condition GoogleDataprocMetastoreDatabaseIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#id GoogleDataprocMetastoreDatabaseIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#location GoogleDataprocMetastoreDatabaseIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dataproc_metastore_database_iam_member#project GoogleDataprocMetastoreDatabaseIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference <a name="GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreDatabaseIamMember } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreDatabaseIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

---



