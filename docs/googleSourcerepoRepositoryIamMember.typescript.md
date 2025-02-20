# `googleSourcerepoRepositoryIamMember` Submodule <a name="`googleSourcerepoRepositoryIamMember` Submodule" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSourcerepoRepositoryIamMember <a name="GoogleSourcerepoRepositoryIamMember" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member google_sourcerepo_repository_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.Initializer"></a>

```typescript
import { googleSourcerepoRepositoryIamMember } from '@cdktf/provider-google-beta'

new googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember(scope: Construct, id: string, config: GoogleSourcerepoRepositoryIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig">GoogleSourcerepoRepositoryIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig">GoogleSourcerepoRepositoryIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleSourcerepoRepositoryIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition">GoogleSourcerepoRepositoryIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSourcerepoRepositoryIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isConstruct"></a>

```typescript
import { googleSourcerepoRepositoryIamMember } from '@cdktf/provider-google-beta'

googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isTerraformElement"></a>

```typescript
import { googleSourcerepoRepositoryIamMember } from '@cdktf/provider-google-beta'

googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isTerraformResource"></a>

```typescript
import { googleSourcerepoRepositoryIamMember } from '@cdktf/provider-google-beta'

googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.generateConfigForImport"></a>

```typescript
import { googleSourcerepoRepositoryIamMember } from '@cdktf/provider-google-beta'

googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleSourcerepoRepositoryIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSourcerepoRepositoryIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSourcerepoRepositoryIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSourcerepoRepositoryIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference">GoogleSourcerepoRepositoryIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition">GoogleSourcerepoRepositoryIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleSourcerepoRepositoryIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference">GoogleSourcerepoRepositoryIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleSourcerepoRepositoryIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition">GoogleSourcerepoRepositoryIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSourcerepoRepositoryIamMemberCondition <a name="GoogleSourcerepoRepositoryIamMemberCondition" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition.Initializer"></a>

```typescript
import { googleSourcerepoRepositoryIamMember } from '@cdktf/provider-google-beta'

const googleSourcerepoRepositoryIamMemberCondition: googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#expression GoogleSourcerepoRepositoryIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#title GoogleSourcerepoRepositoryIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#description GoogleSourcerepoRepositoryIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#expression GoogleSourcerepoRepositoryIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#title GoogleSourcerepoRepositoryIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#description GoogleSourcerepoRepositoryIamMember#description}.

---

### GoogleSourcerepoRepositoryIamMemberConfig <a name="GoogleSourcerepoRepositoryIamMemberConfig" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.Initializer"></a>

```typescript
import { googleSourcerepoRepositoryIamMember } from '@cdktf/provider-google-beta'

const googleSourcerepoRepositoryIamMemberConfig: googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#member GoogleSourcerepoRepositoryIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#repository GoogleSourcerepoRepositoryIamMember#repository}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#role GoogleSourcerepoRepositoryIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition">GoogleSourcerepoRepositoryIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#id GoogleSourcerepoRepositoryIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#project GoogleSourcerepoRepositoryIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#member GoogleSourcerepoRepositoryIamMember#member}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#repository GoogleSourcerepoRepositoryIamMember#repository}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#role GoogleSourcerepoRepositoryIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleSourcerepoRepositoryIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition">GoogleSourcerepoRepositoryIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#condition GoogleSourcerepoRepositoryIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#id GoogleSourcerepoRepositoryIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_sourcerepo_repository_iam_member#project GoogleSourcerepoRepositoryIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSourcerepoRepositoryIamMemberConditionOutputReference <a name="GoogleSourcerepoRepositoryIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleSourcerepoRepositoryIamMember } from '@cdktf/provider-google-beta'

new googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition">GoogleSourcerepoRepositoryIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSourcerepoRepositoryIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepositoryIamMember.GoogleSourcerepoRepositoryIamMemberCondition">GoogleSourcerepoRepositoryIamMemberCondition</a>

---



