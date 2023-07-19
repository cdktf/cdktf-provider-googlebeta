# `google_spanner_database_iam_binding`

Refer to the Terraform Registory for docs: [`google_spanner_database_iam_binding`](https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding).

# `googleSpannerDatabaseIamBinding` Submodule <a name="`googleSpannerDatabaseIamBinding` Submodule" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerDatabaseIamBinding <a name="GoogleSpannerDatabaseIamBinding" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding google_spanner_database_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.Initializer"></a>

```typescript
import { googleSpannerDatabaseIamBinding } from '@cdktf/provider-google-beta'

new googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding(scope: Construct, id: string, config: GoogleSpannerDatabaseIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig">GoogleSpannerDatabaseIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig">GoogleSpannerDatabaseIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleSpannerDatabaseIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition">GoogleSpannerDatabaseIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isConstruct"></a>

```typescript
import { googleSpannerDatabaseIamBinding } from '@cdktf/provider-google-beta'

googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isTerraformElement"></a>

```typescript
import { googleSpannerDatabaseIamBinding } from '@cdktf/provider-google-beta'

googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isTerraformResource"></a>

```typescript
import { googleSpannerDatabaseIamBinding } from '@cdktf/provider-google-beta'

googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference">GoogleSpannerDatabaseIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition">GoogleSpannerDatabaseIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleSpannerDatabaseIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference">GoogleSpannerDatabaseIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleSpannerDatabaseIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition">GoogleSpannerDatabaseIamBindingCondition</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerDatabaseIamBindingCondition <a name="GoogleSpannerDatabaseIamBindingCondition" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition.Initializer"></a>

```typescript
import { googleSpannerDatabaseIamBinding } from '@cdktf/provider-google-beta'

const googleSpannerDatabaseIamBindingCondition: googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#expression GoogleSpannerDatabaseIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#title GoogleSpannerDatabaseIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#description GoogleSpannerDatabaseIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#expression GoogleSpannerDatabaseIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#title GoogleSpannerDatabaseIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#description GoogleSpannerDatabaseIamBinding#description}.

---

### GoogleSpannerDatabaseIamBindingConfig <a name="GoogleSpannerDatabaseIamBindingConfig" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.Initializer"></a>

```typescript
import { googleSpannerDatabaseIamBinding } from '@cdktf/provider-google-beta'

const googleSpannerDatabaseIamBindingConfig: googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#database GoogleSpannerDatabaseIamBinding#database}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.instance">instance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#instance GoogleSpannerDatabaseIamBinding#instance}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#members GoogleSpannerDatabaseIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#role GoogleSpannerDatabaseIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition">GoogleSpannerDatabaseIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#id GoogleSpannerDatabaseIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#project GoogleSpannerDatabaseIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#database GoogleSpannerDatabaseIamBinding#database}.

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#instance GoogleSpannerDatabaseIamBinding#instance}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#members GoogleSpannerDatabaseIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#role GoogleSpannerDatabaseIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleSpannerDatabaseIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition">GoogleSpannerDatabaseIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#condition GoogleSpannerDatabaseIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#id GoogleSpannerDatabaseIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_spanner_database_iam_binding#project GoogleSpannerDatabaseIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerDatabaseIamBindingConditionOutputReference <a name="GoogleSpannerDatabaseIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleSpannerDatabaseIamBinding } from '@cdktf/provider-google-beta'

new googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition">GoogleSpannerDatabaseIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerDatabaseIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamBinding.GoogleSpannerDatabaseIamBindingCondition">GoogleSpannerDatabaseIamBindingCondition</a>

---



