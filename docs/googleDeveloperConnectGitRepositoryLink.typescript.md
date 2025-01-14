# `googleDeveloperConnectGitRepositoryLink` Submodule <a name="`googleDeveloperConnectGitRepositoryLink` Submodule" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectGitRepositoryLink <a name="GoogleDeveloperConnectGitRepositoryLink" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link google_developer_connect_git_repository_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer"></a>

```typescript
import { googleDeveloperConnectGitRepositoryLink } from '@cdktf/provider-google-beta'

new googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink(scope: Construct, id: string, config: GoogleDeveloperConnectGitRepositoryLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig">GoogleDeveloperConnectGitRepositoryLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig">GoogleDeveloperConnectGitRepositoryLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDeveloperConnectGitRepositoryLinkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDeveloperConnectGitRepositoryLink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isConstruct"></a>

```typescript
import { googleDeveloperConnectGitRepositoryLink } from '@cdktf/provider-google-beta'

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformElement"></a>

```typescript
import { googleDeveloperConnectGitRepositoryLink } from '@cdktf/provider-google-beta'

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformResource"></a>

```typescript
import { googleDeveloperConnectGitRepositoryLink } from '@cdktf/provider-google-beta'

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport"></a>

```typescript
import { googleDeveloperConnectGitRepositoryLink } from '@cdktf/provider-google-beta'

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDeveloperConnectGitRepositoryLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDeveloperConnectGitRepositoryLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDeveloperConnectGitRepositoryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectGitRepositoryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference">GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cloneUriInput">cloneUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.gitRepositoryLinkIdInput">gitRepositoryLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.parentConnectionInput">parentConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cloneUri">cloneUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.gitRepositoryLinkId">gitRepositoryLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.parentConnection">parentConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference">GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cloneUriInput`<sup>Optional</sup> <a name="cloneUriInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cloneUriInput"></a>

```typescript
public readonly cloneUriInput: string;
```

- *Type:* string

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `gitRepositoryLinkIdInput`<sup>Optional</sup> <a name="gitRepositoryLinkIdInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.gitRepositoryLinkIdInput"></a>

```typescript
public readonly gitRepositoryLinkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentConnectionInput`<sup>Optional</sup> <a name="parentConnectionInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.parentConnectionInput"></a>

```typescript
public readonly parentConnectionInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDeveloperConnectGitRepositoryLinkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cloneUri`<sup>Required</sup> <a name="cloneUri" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cloneUri"></a>

```typescript
public readonly cloneUri: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `gitRepositoryLinkId`<sup>Required</sup> <a name="gitRepositoryLinkId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.gitRepositoryLinkId"></a>

```typescript
public readonly gitRepositoryLinkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parentConnection`<sup>Required</sup> <a name="parentConnection" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.parentConnection"></a>

```typescript
public readonly parentConnection: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectGitRepositoryLinkConfig <a name="GoogleDeveloperConnectGitRepositoryLinkConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.Initializer"></a>

```typescript
import { googleDeveloperConnectGitRepositoryLink } from '@cdktf/provider-google-beta'

const googleDeveloperConnectGitRepositoryLinkConfig: googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.cloneUri">cloneUri</a></code> | <code>string</code> | Required. Git Clone URI. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.gitRepositoryLinkId">gitRepositoryLinkId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.parentConnection">parentConnection</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.etag">etag</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#id GoogleDeveloperConnectGitRepositoryLink#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#project GoogleDeveloperConnectGitRepositoryLink#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloneUri`<sup>Required</sup> <a name="cloneUri" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.cloneUri"></a>

```typescript
public readonly cloneUri: string;
```

- *Type:* string

Required. Git Clone URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#clone_uri GoogleDeveloperConnectGitRepositoryLink#clone_uri}

---

##### `gitRepositoryLinkId`<sup>Required</sup> <a name="gitRepositoryLinkId" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.gitRepositoryLinkId"></a>

```typescript
public readonly gitRepositoryLinkId: string;
```

- *Type:* string

Required.

The ID to use for the repository, which will become the final component of
the repository's resource name. This ID should be unique in the connection.
Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#git_repository_link_id GoogleDeveloperConnectGitRepositoryLink#git_repository_link_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#location GoogleDeveloperConnectGitRepositoryLink#location}

---

##### `parentConnection`<sup>Required</sup> <a name="parentConnection" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.parentConnection"></a>

```typescript
public readonly parentConnection: string;
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#parent_connection GoogleDeveloperConnectGitRepositoryLink#parent_connection}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#annotations GoogleDeveloperConnectGitRepositoryLink#annotations}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#etag GoogleDeveloperConnectGitRepositoryLink#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#id GoogleDeveloperConnectGitRepositoryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#labels GoogleDeveloperConnectGitRepositoryLink#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#project GoogleDeveloperConnectGitRepositoryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDeveloperConnectGitRepositoryLinkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#timeouts GoogleDeveloperConnectGitRepositoryLink#timeouts}

---

### GoogleDeveloperConnectGitRepositoryLinkTimeouts <a name="GoogleDeveloperConnectGitRepositoryLinkTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.Initializer"></a>

```typescript
import { googleDeveloperConnectGitRepositoryLink } from '@cdktf/provider-google-beta'

const googleDeveloperConnectGitRepositoryLinkTimeouts: googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#create GoogleDeveloperConnectGitRepositoryLink#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#delete GoogleDeveloperConnectGitRepositoryLink#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#update GoogleDeveloperConnectGitRepositoryLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#create GoogleDeveloperConnectGitRepositoryLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#delete GoogleDeveloperConnectGitRepositoryLink#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_developer_connect_git_repository_link#update GoogleDeveloperConnectGitRepositoryLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference <a name="GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDeveloperConnectGitRepositoryLink } from '@cdktf/provider-google-beta'

new googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDeveloperConnectGitRepositoryLinkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a>

---



